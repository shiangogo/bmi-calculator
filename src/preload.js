const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('bmi', {
  calculateBMI: (weight, height) => ipcRenderer.invoke('calculate-bmi', weight, height)
});
