import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import archiver from 'archiver'

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const outputDir = path.resolve(__dirname, '..')
const outputFile = path.join(outputDir, 'dist.zip')
const sourceDir = path.resolve(__dirname, '../dist')

// 确保源文件夹存在
if (!fs.existsSync(sourceDir)) {
  console.error(`${sourceDir} 不存在`)
  // eslint-disable-next-line node/prefer-global/process
  process.exit(1)
}

// 确保输出文件夹存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// 创建一个流文件
const output = fs.createWriteStream(outputFile)
const archive = archiver('zip', {
  zlib: { level: 9 }, // 设置压缩级别
})

// 监听文件流的关闭事件
output.on('close', () => {
  console.log(
    `Archive created successfully. Total size: ${archive.pointer()} bytes`,
  )
})

// 监听文件流的错误事件
archive.on('error', (err) => {
  throw err
})

// 开始写入文件流
archive.pipe(output)

// 将文件添加到压缩包中
archive.directory(sourceDir, false)

// 关闭文件流
archive.finalize()
