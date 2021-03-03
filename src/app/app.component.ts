import {
  AfterViewChecked,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ConversionTypeBtnComponent } from './components/conversion-type-btn/conversion-type-btn.component';
import { Convert } from './engine/main/Convert';
import Big from 'big.js';

import * as ButtonData from './engine/data/buttondata.json';
import { HistoryService } from './services/history.service';
import { History } from './classes/History';
import { SettingsService } from './services/settings.service';
import { settings } from 'cluster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  constructor(
    public history: HistoryService,
    public settings: SettingsService
  ) {}
  title = 'cuik-convertor';

  @ViewChildren('conversionBtn')
  conversionBtn!: QueryList<ConversionTypeBtnComponent>;

  isHistoryTabOpen: boolean = false;

  conversionButtons!: ConversionTypeBtnComponent[];
  historyList: History[] = this.history.HistoryList;

  settingsToggle: boolean = false;

  roundOutput: boolean = this.settings.bRoundOutput;

  ngAfterViewChecked() {
    this.conversionButtons = this.conversionBtn.toArray();
  }

  //input data
  InputNumber: string = '';
  OutputNumber: string = '';

  // page data
  buttonTypes: Array<string> = ButtonData.buttonTypes;
  textTypes: Array<string> = ButtonData.titles;
  loadedPageNumber: number = 1;

  // scroll data
  InScrollData: string = '';
  OutScrollData: string = '';

  ScrollData: string = this.InScrollData + ' ' + this.OutScrollData;

  updateSettings() {
    this.settings.bRoundOutput = this.roundOutput;
  }

  //load the corresponding page and activate buttons
  loadPage(pageNumber: any) {
    this.loadedPageNumber = pageNumber;

    for (let i = 1; i <= this.conversionButtons.length; i++) {
      if (i === pageNumber) {
        this.conversionButtons[i - 1].isActivated = true;
      } else {
        this.conversionButtons[i - 1].isActivated = false;
      }
    }
  }

  //Feed back
  feedback() {
    window.open('https://cuikapps.com/support', '_blank');
  }

  //toggles the history tab
  toggleHistory() {
    this.isHistoryTabOpen = !this.isHistoryTabOpen;
  }

  //Clear the conversion history
  clearHistory() {
    this.history.clearHistory();
  }

  //Closes the settings page
  closeSettings() {
    this.settingsToggle = false;
  }

  //Opens the settings page
  openSettings() {
    this.settingsToggle = true;
  }

  // get scroll data from scroll component
  setInScrollData(scrollIn: string) {
    this.InScrollData = scrollIn;
    this.updateScrollData();
  }
  setOutScrollData(scrollOut: string) {
    this.OutScrollData = scrollOut;
    this.updateScrollData();
  }

  // Convert
  updateScrollData() {
    this.ScrollData = this.InScrollData + ' ' + this.OutScrollData;
    if (this.InputNumber !== '') {
      if (this.roundOutput)
        this.OutputNumber = Big(
          Convert.convert(this.ScrollData, this.InputNumber)
        )
          .round()
          .toString();
      else
        this.OutputNumber = Convert.convert(this.ScrollData, this.InputNumber);
    } else {
      return;
    }

    let calculation: History = new History(
      this.InScrollData,
      this.OutScrollData,
      this.OutputNumber,
      this.InputNumber
    );

    this.history.addCalculation(calculation);
  }
}
