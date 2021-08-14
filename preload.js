// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
});

// const { contextBridge, ipcRenderer} = require("electron");
// const { execSync } = require("child_process");
// const { convert } = require('encoding-japanese');
// 
// contextBridge.exposeInMainWorld(
//   "requires", {
//     execSync: (cmd) => {
//       return execSync(cmd);
//     },
//     convert: (bytes, data) => {
//       return convert(bytes, data);
//     }
//   }
// );
