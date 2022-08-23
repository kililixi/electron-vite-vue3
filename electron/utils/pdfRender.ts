import { PDFDocument } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs";
import os from "os";
import PdfForm from "./PdfForm";
import { join } from "path";
import { print } from "pdf-to-printer";

console.log(__dirname);
// const fontBytes = fs.readFileSync( join(__dirname, '../../../electron/assets/black.otf'))
// const pdfTemplate = fs.readFileSync(join(__dirname, '../../../electron/assets/template.pdf'))
const fontBytes = fs.readFileSync(join(os.homedir(), "black.otf"));
const pdfTemplate = fs.readFileSync(join(os.homedir(), "template.pdf"));

async function fillPdfForm(fields: PdfForm) {
  const pdfDoc = await PDFDocument.load(pdfTemplate);
  pdfDoc.registerFontkit(fontkit);

  const wsblackotf = await pdfDoc.embedFont(fontBytes);

  const form = pdfDoc.getForm();
  form.getTextField("xm").setText(fields.name);

  form.updateFieldAppearances(wsblackotf);
  const pdfBytes = await pdfDoc.save();

  await fs.writeFileSync(join(os.homedir(), "generatePdf.pdf"), pdfBytes);
  console.log("PDF Created");
  print(join(os.homedir(), "generatePdf.pdf"), {
    printer: "Generic 36BW-9SeriesPCL",
    pages: "1",
  }).then(() => {
    console.log("PrintComplete");
  });
}

// const PdfFormFill = async (fields:PdfForm) => {
//     fillPdfForm(fields);
// }

export default fillPdfForm;
