import fs from "fs-extra";

const codeDir = process.cwd()
const rootDir = codeDir.replace("code", "")
const ignoreList = [".git", ".gitignore", ".idea", "CNAME", "README.md", "code", "dist"]

try {
  console.log("Removing previous version.")
  const elements = fs.readdirSync(rootDir)

  for (let element of elements) {
    try {
      if (ignoreList.includes(element)) continue
      const elementLocation = rootDir + element
      fs.removeSync(elementLocation, { recursive: true })
    } catch (error) {
      console.log(error)
    }
  }

  console.log("Copying new version.")
  const distFolder = rootDir + "dist"
  fs.copySync(distFolder, rootDir)
} catch (error) {
  console.log(error)
}
