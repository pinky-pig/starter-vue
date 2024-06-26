/* eslint-disable node/prefer-global/process */
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import simpleGit from 'simple-git'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/********************/
/* 这里需要改一下名字  */
/********************/
const fileName = 'monitor.zip' // 文件名字，也是分支名字
const filePath = path.resolve(__dirname, `../dist-zip/${fileName}`) // 文件路径

/**********************************/
/* 目前自己使用不需要改，如果有变化再改 */
/**********************************/
const remoteUrl = 'https://gitee.com/wsngwenbo_admin/build-zip.git' // 远程仓库地址
const branchName = fileName.split('.')[0] // 分支名字
const tempPath = path.resolve(__dirname, '../dist-zip-temp/') // 临时目录

if (!fs.existsSync(filePath)) {
  console.log('压缩包文件不存在，请先打包压缩')
  process.exit(1)
}

createTempFolder().then(() => {
  const git = simpleGit(tempPath)
  manageRepo()
  async function manageRepo() {
    try {
      // 获取远程分支列表
      const branches = await git.listRemote(['--heads', remoteUrl])
      const branchExists = branches.includes(`refs/heads/${branchName}`)

      // 克隆仓库
      await git.clone(remoteUrl, tempPath)

      // 切换到仓库目录
      git.cwd(tempPath)

      if (branchExists) {
        // 检出现有分支
        await git.checkout(branchName)
      } else {
        // 创建并检出新分支
        await git.checkoutLocalBranch(branchName)
      }

      fs.copyFile(filePath, path.join(tempPath, fileName), (err) => {
        if (err) {
          console.error('复制文件失败:', err)
          process.exit(1)
        }
        console.log('2. 压缩包文件复制成功')

        const msg = getTime()
        git
          .init()
          .then(() => git.add(path.join(tempPath, fileName)))
          .then(() => git.commit(msg))
          .then(() => git.push(['-u', 'origin', branchName]))
          .then(() => {
            console.log('3. 上传到 gitee 成功')
            fs.rm(tempPath, { recursive: true, force: true }, (err) => {
              if (err) {
                console.error('删除目录失败:', err)
              } else {
                console.log('4. 删除临时文件夹成功')
                console.log(`5. 请查看 ${msg} `)
                console.log(
                  `${remoteUrl.split('.git')[0]}/blob/${branchName}/${fileName}`,
                )
              }
            })
          })
          .catch((error) => console.error('Error:', error))
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }
})

/**
 * 创建临时文件夹
 */
function createTempFolder() {
  return new Promise((resolve) => {
    if (fs.existsSync(tempPath)) {
      fs.rm(tempPath, { recursive: true, force: true }, (err) => {
        if (err) {
          console.error('删除目录失败:', err)
        } else {
          console.log(`删除${tempPath}成功`)
          fs.mkdirSync(tempPath)
          console.log('1. 创建临时文件夹成功')
          resolve(true)
        }
      })
    } else {
      fs.mkdirSync(tempPath)
      console.log('1. 创建临时文件夹成功')
      resolve(true)
    }
  })
}

/**
 * 获取时间
 */
function getTime() {
  const objectDate = new Date()

  const day = objectDate.getDate()
  const month = objectDate.getMonth()
  const year = objectDate.getFullYear()

  const hours = objectDate.getHours()
  const minutes = objectDate.getMinutes()
  const seconds = objectDate.getSeconds()

  return `${year}-${month + 1}-${day} ${hours}:${minutes}:${seconds}`
}
