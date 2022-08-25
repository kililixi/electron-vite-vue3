import os from 'os'
import { join } from 'path'
import { print } from 'pdf-to-printer'

console.log(__dirname)
const dbs = join(process.cwd(), 'resources')
console.log(dbs)

function printPdf() {
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

export default printPdf
