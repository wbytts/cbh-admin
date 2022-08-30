const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWin = null;

process.env.ELECTRON_HIDE_INTERNAL_MODULES = 'true';

app.on('ready', () => {
    mainWin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {}
    });

    mainWin.loadFile('./index.html');
});


