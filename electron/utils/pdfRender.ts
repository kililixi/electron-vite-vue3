import { PDFDocument, StandardFonts, rgb, degrees } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from 'fs'
import os from 'os'
import PdfForm from './PdfForm'
import { join } from 'path'

console.log(__dirname)
const fontBytes = fs.readFileSync( join(__dirname, '../../../electron/assets/black.otf'))
// const fontBytes = fs.readFileSync('/Users/startsi/Downloads/black.otf')
// const pdfTemplate = fs.readFileSync('/Users/startsi/Downloads/aaaa.pdf')
const pdfTemplate = fs.readFileSync(join(__dirname, '../../../electron/assets/template.pdf'))

async function fillPdfForm(fields:PdfForm) {
  
  const pdfDoc = await PDFDocument.load(pdfTemplate);
  pdfDoc.registerFontkit(fontkit)

  const wsblackotf = await pdfDoc.embedFont(fontBytes)

  const form = pdfDoc.getForm();
  form.getTextField('xm').setText(fields.name);

  form.updateFieldAppearances(wsblackotf);
  const pdfBytes = await pdfDoc.save();

  await fs.writeFileSync(join(os.homedir(), 'generatePdf.pdf'), pdfBytes);
  console.log("PDF Created");
}

let PdfFormFill = async (fields:PdfForm) => {
    fillPdfForm(fields);
}

export default fillPdfForm
