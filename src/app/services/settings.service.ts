import { Injectable } from '@angular/core';
import { ISetting } from '../interfaces/ISetting';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private userSettings: ISetting = {
    bRoundOutput: false,
  };

  constructor() {
    /* Check if the item "settings" exist on localStorage and if yes the gets the value 
    else creates the item "settings" */
    if (localStorage.getItem('settings'))
      this.userSettings = JSON.parse(
        localStorage.getItem('settings') || '{bRoundOutput:false}'
      );
    else localStorage.setItem('settings', JSON.stringify(this.userSettings));
  }

  //Get the settings item then updates it with the value passed in.
  set bRoundOutput(v: boolean) {
    let tempSettings: ISetting = JSON.parse(
      localStorage.getItem('settings') || '{bRoundOutput:false}'
    );
    tempSettings.bRoundOutput = v;
    localStorage.setItem('settings', JSON.stringify(tempSettings));
    this.updateUserSettings();
  }
  get bRoundOutput() {
    this.updateUserSettings();
    return this.userSettings.bRoundOutput;
  }

  updateUserSettings() {
    if (localStorage.getItem('settings'))
      this.userSettings = JSON.parse(
        localStorage.getItem('settings') || '{bRoundOutput:false}'
      );
    else localStorage.setItem('settings', JSON.stringify(this.userSettings));
  }
}
