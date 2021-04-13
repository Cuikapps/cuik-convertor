import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}

  private _settingsToggle = false;
  public get settingsToggle() {
    return this._settingsToggle;
  }
  public set settingsToggle(value) {
    this._settingsToggle = value;
  }

  private _historyToggle = false;
  public get historyToggle() {
    return this._historyToggle;
  }
  public set historyToggle(value) {
    this._historyToggle = value;
  }

  private _buttonBarToggle = false;
  public get buttonBarToggle() {
    return this._buttonBarToggle;
  }
  public set buttonBarToggle(value) {
    this._buttonBarToggle = value;
  }
  
  private _calculatorToggle = false;
  public get calculatorToggle() {
    return this._calculatorToggle;
  }
  public set calculatorToggle(value) {
    this._calculatorToggle = value;
  }
}
