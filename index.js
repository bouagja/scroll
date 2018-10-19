const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;

let win;
function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile('index.html');
  win.toggleDevTools();
  win.on('closed', () => {
    win = null
  });
}
  
app.on('ready', createWindow)
  
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
  
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})