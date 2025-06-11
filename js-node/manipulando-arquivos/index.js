const fs = require('fs').promises;
const path = require('path');

async function ReadDir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath);

        if (stats.isDirectory()) {
            ReadDir(fileFullPath);
            continue;
        }

        console.log(file, stats.isDirectory())
    }
}

ReadDir('../');