import { join } from 'path'

let videoPrefixPath: string
if (import.meta.env.DEV) {
  videoPrefixPath = join('/', 'videos')
} else {
  videoPrefixPath = join(__dirname, 'videos')
}
export { videoPrefixPath }
