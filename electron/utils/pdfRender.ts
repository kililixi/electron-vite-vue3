import { PDFDocument, StandardFonts, rgb, degrees } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import * as fs from 'fs/promises'
import PdfForm from './PdfForm'

const fontBytes = await fs.readFile('../font/black.otf')
const pdfTemplate = await fs.readFile('/Users/startsi/Downloads/aaaa.pdf')

async function pdfFormFill(fields:PdfForm) {
  
  const pdfDoc = await PDFDocument.load(pdfTemplate);
  pdfDoc.registerFontkit(fontkit)

  const wsblackotf = await pdfDoc.embedFont(fontBytes)

  const form = pdfDoc.getForm();
  form.getTextField('xm').setText(fields.name);

  form.updateFieldAppearances(wsblackotf);
  const pdfBytes = await pdfDoc.save();

  await fs.writeFile('/Users/startsi/Downloads/aaaa22.pdf', pdfBytes);
  console.log("PDF Created");
}

export default pdfFormFill
