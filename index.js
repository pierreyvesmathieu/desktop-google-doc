const { app, BrowserWindow, dialog } = require('electron')
let is_closing = false
const createWindow = () => {
    const win = new BrowserWindow({
      height: 950,
      width: 1400,
      minWidth: 600,
      minHeight: 200,
      center: true,
      fullscreenable: true,
    })
  
    win.loadURL('https://drive.google.com/drive/my-drive')

    win.on('close', (e) => {
      // Get all opened windows
      const allWindows = BrowserWindow.getAllWindows();
      console.log("Khsdlfkjshdlfkjhsdlks")
      // Check if there are windows other than the main window
      console.log(allWindows.length)
      if (allWindows.length > 1 && !is_closing) {
        e.preventDefault(); // Prevent default close action
  
        // Prompt user for confirmation
        const options = {
          type: 'question',
          buttons: ['Yes', 'No'],
          defaultId: 1,
          title: 'Confirm',
          message: 'There are other windows opened. Are you sure you want to quit?'
        };
  
        dialog.showMessageBox(win, options).then((response) => {
          if (response.response === 0) { // If user clicked 'Yes'
            // Close all windows and then quit the app
            let winCount = allWindows.length
            for (let w of allWindows) {
              if (w !== win && !w.isDestroyed()) {
                w.on('closed', (e) => {
                  winCount = winCount -1
                  if (winCount<=1) {
                    win.close()
                  }
                })
                w.close();
              }
            }
            // Close main window
            
          }
        });
        is_closing = true

      }
    });
  }

  app.whenReady().then(() => {
    createWindow()
  })



