const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true, // hide menu bar at top of window
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.loadFile('views/index.html')
    win.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()  // run app.quit() if the user is not on macOS
})