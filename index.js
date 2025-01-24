const { app, BrowserWindow, Menu } = require('electron');
const fs = require('node:fs');

const portGen = (usedPorts = new Set()) => {
    const minPort = 1024;
    const maxPort = 65535;

    let randomPort;

    do {
        randomPort = Math.floor(Math.random() * (maxPort - minPort + 1)) + minPort;
    } while (usedPorts.has(randomPort));

    return randomPort;
}

const usedPorts = new Set([8080, 3000, 5000]);
const randomPort = portGen(usedPorts)

let json = JSON.parse(fs.readFileSync("./config.json", { encoding: 'utf8' }))
json.port = randomPort;

fs.writeFileSync('./config.json', JSON.stringify(json))

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    });

    require('./server')();
    
    let rndmPt = JSON.parse(fs.readFileSync('./config.json', { encoding: 'utf8' })).port;

    console.log(rndmPt)
    Menu.setApplicationMenu(null)
    mainWindow.loadURL(`http://localhost:${rndmPt}/`)

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
