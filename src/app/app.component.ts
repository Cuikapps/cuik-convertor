import {
  AfterContentChecked,
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ConversionTypeBtnComponent } from './components/conversion-type-btn/conversion-type-btn.component';
import { Convert } from './engine/main/Convert';
import Big from 'big.js';

import * as ButtonData from './engine/data/buttondata.json';
import { HistoryService } from './services/history.service';
import { History } from './classes/History';
import { SettingsService } from './services/settings.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked {
  constructor(
    public history: HistoryService,
    public settings: SettingsService,
    private cdr: ChangeDetectorRef
  ) {}
  title = 'cuik-convertor';

  @ViewChildren('conversionBtn')
  conversionBtn!: QueryList<ConversionTypeBtnComponent>;

  isPageLoaded: boolean = false;

  conversionButtons!: ConversionTypeBtnComponent[];
  historyList: History[] = this.history.HistoryList;

  settingsToggle: boolean = false;
  buttonBarToggle: boolean = false;
  calculatorToggle: boolean = false;
  historyToggle: boolean = false;

  bRoundOutput: boolean = this.settings.bRoundOutput;

  ngAfterContentChecked() {
    this.cdr.detectChanges();
    this.isPageLoaded = true;
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
    this.settings.bRoundOutput = this.bRoundOutput;
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
    this.toggleButtonBar();
    window.open('https://cuikapps.com/support', '_blank');
  }

  //toggles the history tab
  toggleHistory() {
    this.toggleButtonBar();
    this.historyToggle = !this.historyToggle;
  }

  toggleButtonBar() {
    this.buttonBarToggle = !this.buttonBarToggle;
  }

  //Clear the conversion history
  clearHistory() {
    this.history.clearHistory();
  }

  toggleSettings() {
    this.toggleButtonBar();
    this.settingsToggle = !this.settingsToggle;
  }

  toggleCalculator() {
    this.toggleButtonBar();
    this.calculatorToggle = !this.calculatorToggle;
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
      if (this.bRoundOutput)
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
