import { PDFDocument } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import fs from 'fs'
import os from 'os'
import PdfForm from './PdfForm'
import { join } from 'path'

console.log(__dirname)
const dbs = join(process.cwd(), 'resources')
console.log(dbs)

let fontBytes: string | ArrayBuffer
let pdfTemplate: string | ArrayBuffer

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

  return new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(join(os.homedir(), 'generatePdf.pdf'), pdfBytes)
      console.log('PDF Created')
      resolve('PDF Created')
    } catch (err) {
      reject(err)
    }
  })
}

export default fillPdfForm
