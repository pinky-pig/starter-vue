import { readdir, writeFile } from "node:fs/promises";
import { relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const rootDir = resolve(__dirname, ".."); // 项目根目录

// 指定要扫描的目录数组
const targetDirs = [
  resolve(__dirname, "../src"),
  resolve(__dirname, "../signal-exit"),
  resolve(__dirname, "../public"),
];
const outputPath = resolve(__dirname, "./relative-paths.txt");

async function getAllFiles(dir) {
  const files: string[] = [];

  async function scan(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = resolve(currentDir, entry.name);

      if (entry.isDirectory()) {
        await scan(fullPath);
      } else {
        // 获取相对于项目根目录的路径
        const relativePath = relative(rootDir, fullPath).replaceAll("\\", "/");
        files.push(`'${relativePath}',`);
      }
    }
  }

  await scan(dir);
  return files;
}

// 执行并保存结果
async function main() {
  try {
    const allFiles: string[] = [];

    for (const dir of targetDirs) {
      try {
        const files = await getAllFiles(dir);
        allFiles.push(...files);
      } catch (error) {
        console.warn(`扫描目录 ${dir} 时出错:`, error.message);
        continue;
      }
    }

    await writeFile(outputPath, allFiles.join("\n"), "utf-8");
    console.log("文件相对路径已保存到:", outputPath);
    console.log("共扫描到", allFiles.length, "个文件");
  } catch (error) {
    console.error("发生错误:", error);
  }
}

main();
