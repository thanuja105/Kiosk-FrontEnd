const { app, ipcMain, BrowserWindow, screen } = require("electron");
const Store = require("electron-store");
const { PosPrinter } = require("electron-pos-printer");

let appWin;

let printWin;
const store = new Store();

//If the record does not exist, it is created with a default value of 0.
if (!store.get("clicks")) {
  store.set("clicks", 0);
}

//This function creates the window and its properties.
createWindow = () => {
  appWin = new BrowserWindow({
    width: 1920,
    height: 1200,
    frame: false,
    title: "smart safe",
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  appWin.loadURL(`file://${__dirname}/dist/index.html`);

  appWin.setMenu(null);

  // appWin.webContents.openDevTools();

  appWin.on("closed", () => {
    appWin = null;
  });

  printWin = new BrowserWindow({
    width: 800,
    height: 600,
    title: "PrintWin",
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  printWin.loadURL(`file://${__dirname}/dist/printWin.html`);

  printWin.setMenu(null);

  printWin.hide();

  //  printWin.webContents.openDevTools();

  printWin.on("closed", () => {
    printWin = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

/* ipcMain is listening the "message" channel, and when the message arrives, 
  it replies with "pong" */
ipcMain.on("message", (event, data) => {
  console.dir("******");
  console.log("message:evevnt" + JSON.stringify(data));
  printWin.webContents.send("PreparePrintReport", data);
});

ipcMain.on("PrintReceipt", (event, data) => {
  console.dir("PrintReceipt called");
  PosPrinter.print(data, {
    printerName: "dasu_printer",
    preview: true,
    silent: true,
  }).catch((error) => console.error(error));
  printWin.webContents.print({ silent: true });
});

ipcMain.on("InsertBillPrintReceipt", (event, data) => {
  console.dir("InsertBillPrintReceipt called");
  PosPrinter.print(data, {
    printerName: "dasu_printer",
    preview: true,
    silent: true,
  }).catch((error) => console.error(error));
  printWin.webContents.print({ silent: true });
});

ipcMain.on("RePrintReceipt", (event, data) => {
  console.dir("RePrintReceipt called");
  PosPrinter.print(data, {
    printerName: "dasu_printer",
    preview: true,
    silent: true,
  }).catch((error) => console.error(error));
  printWin.webContents.print({ silent: true });
});

ipcMain.on("EODPrintReceipt", (event, data) => {
  console.dir("EODPrintReceipt called");
  PosPrinter.print(data, {
    printerName: "dasu_printer",
    preview: true,
    silent: true,
  }).catch((error) => console.error(error));
  printWin.webContents.print({ silent: true });
});

ipcMain.on("EmployeeReportPrintReceipt", (event, data) => {
  console.dir("EmployeeReportPrintReceipt called");
  PosPrinter.print(data, {
    printerName: "dasu_printer",
    preview: true,
    silent: true,
  }).catch((error) => console.error(error));
  printWin.webContents.print({ silent: true });
});

ipcMain.on("ManagerReportPrintReceipt", (event, data) => {
  console.dir("ManagerReportPrintReceipt called");
  PosPrinter.print(data, {
    printerName: "dasu_printer",
    preview: true,
    silent: true,
  }).catch((error) => console.error(error));
  printWin.webContents.print({ silent: true });
});

ipcMain.on(" Pickup Amount  Receipt", (event, data) => {
  console.dir(" Pickup Amount  Receipt called");
  PosPrinter.print(data, {
    printerName: "dasu_printer",
    preview: true,
    silent: true,
  }).catch((error) => console.error(error));
  printWin.webContents.print({ silent: true });
});
ipcMain.on("StandBankPrintReceipt", (event, data) => {
  console.dir("StandBankPrintReceipt called");
  PosPrinter.print(data, {
    printerName: "dasu_printer",
    preview: true,
    silent: true,
  }).catch((error) => console.error(error));
  printWin.webContents.print({ silent: true });
});

ipcMain.on("ChangeRequestPrintReceipt", (event, data) => {
  console.dir("ChangeRequestPrintReceipt called");
  PosPrinter.print(data, {
    printerName: "dasu_printer",
    preview: true,
    silent: true,
  }).catch((error) => console.error(error));
  printWin.webContents.print({ silent: true });
});

ipcMain.on("openshiftmanagerlocker", (event, data) => {
  child(executablePath, function (err, data) {
    const opts = { show: true };
    if (BrowserWindow.getFocusedWindow()) {
      appWin = BrowserWindow.getFocusedWindow();
      const pos = appWin.getPosition();
      Object.assign(opts, {
        x: pos[0] + 22,
        y: pos[0] + 22,
      });
    }
    if (err) {
      console.error(err);
      return;
    }

    console.log(data.toString());
  });
});

ipcMain.on("openmanagerlocker", (event, data) => {
  child(executablePath1, function (err, data) {
    const opts = { show: true };
    if (BrowserWindow.getFocusedWindow()) {
      appWin = BrowserWindow.getFocusedWindow();
      const pos = appWin.getPosition();
      Object.assign(opts, {
        x: pos[0] + 22,
        y: pos[0] + 22,
      });
    }
    if (err) {
      console.error(err);
      return;
    }

    console.log(data.toString());
  });
});

ipcMain.on("openvalutlocker", (event, data) => {
  child(executablePath2, function (err, data) {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data.toString());
  });
});

ipcMain.on("openadminlocker", (event, data) => {
  let sp = child(executablePath3, function (err, data) {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data.toString());
  });
  setTimeout(function () {
    sp.kill();
  }, 5000);
});
