import { Injectable } from '@angular/core';
import { ISetting } from '../interfaces/ISetting';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private userSettings: ISetting = {
    bRoundOutput: false,
    decimals: 0,
  };
  private readonly DEFAULT_USER_SETTINGS: ISetting = {
    bRoundOutput: false,
    decimals: 0,
  };

  constructor() {
    /* Check if the item "settings" exist on localStorage and if yes the gets the value 
    else creates the item "settings" */
    if (localStorage.getItem('settings'))
      this.userSettings = JSON.parse(
        localStorage.getItem('settings') ||
          JSON.stringify(this.DEFAULT_USER_SETTINGS)
      );
    else localStorage.setItem('settings', JSON.stringify(this.userSettings));
  }

  //Get the settings item then updates it with the value passed in.
  set bRoundOutput(v: boolean) {
    let tempSettings: ISetting = JSON.parse(
      localStorage.getItem('settings') ||
        JSON.stringify(this.DEFAULT_USER_SETTINGS)
    );
    tempSettings.bRoundOutput = v;
    localStorage.setItem('settings', JSON.stringify(tempSettings));
    this.updateUserSettings();
  }
  get bRoundOutput(): boolean {
    this.updateUserSettings();
    return this.userSettings.bRoundOutput;
  }

  set decimals(v: number) {
    let tempSettings: ISetting = JSON.parse(
      localStorage.getItem('settings') ||
        JSON.stringify(this.DEFAULT_USER_SETTINGS)
    );
    tempSettings.decimals = v;
    localStorage.setItem('settings', JSON.stringify(tempSettings));
    this.updateUserSettings();
  }

  get decimals(): number {
    this.updateUserSettings();
    return this.userSettings.decimals;
  }

  updateUserSettings() {
    if (localStorage.getItem('settings'))
      this.userSettings = JSON.parse(
        localStorage.getItem('settings') ||
          JSON.stringify(this.DEFAULT_USER_SETTINGS)
      );
    else localStorage.setItem('settings', JSON.stringify(this.userSettings));
  }
}
