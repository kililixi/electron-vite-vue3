import { PDFDocument } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import fs from 'fs'
import os from 'os'
import PdfForm from './PdfForm'
import { join } from 'path'
import { print } from 'pdf-to-printer'

console.log(__dirname)
const dbs = join(process.cwd(), 'resources')
console.log(dbs)

let fontBytes
let pdfTemplate

// 如果是开发模式
if (import.meta.env.DEV) {
  fontBytes = fs.readFileSync(
    join(process.cwd(), './electron/assets/black.otf')
  )
  pdfTemplate = fs.readFileSync(
    join(process.cwd(), './electron/assets/template.pdf')
  )
} else {
  fontBytes = fs.readFileSync(join(dbs, './assets/black.otf'))
  pdfTemplate = fs.readFileSync(join(dbs, './assets/template.pdf'))
}

async function fillPdfForm(fields: PdfForm): Promise<string> {
  const pdfDoc = await PDFDocument.load(pdfTemplate)
  pdfDoc.registerFontkit(fontkit)

  const wsblackotf = await pdfDoc.embedFont(fontBytes)

  const form = pdfDoc.getForm()
  form.getTextField('xm').setText(fields.name)

  form.updateFieldAppearances(wsblackotf)
  const pdfBytes = await pdfDoc.save()

  await fs.writeFileSync(join(os.homedir(), 'generatePdf.pdf'), pdfBytes)
  console.log('PDF Created')
  return new Promise((resolve, reject) => {
    print(join(os.homedir(), 'generatePdf.pdf'), {
      printer: 'Generic 36BW-9SeriesPCL',
      pages: '1',
    })
      .then(() => {
        console.log('PrintComplete')
        return resolve('打印成功')
      })
      .catch((err) => {
        console.error('打印出错', err)
        return reject(err)
      })
  })
}

// const PdfFormFill = async (fields:PdfForm) => {
//     fillPdfForm(fields);
// }

export default fillPdfForm
