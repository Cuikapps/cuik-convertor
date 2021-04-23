import {
  AfterContentChecked,
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ConversionTypeBtnComponent } from './components/conversion-type-btn/conversion-type-btn.component';

import BigNumber from 'bignumber.js';
import { HistoryService } from '@services/history.service';
import { SettingsService } from '@services/settings.service';
import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ConvertorService } from './services/convertor.service';
import { History } from './classes/History';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentChecked, OnInit {
  constructor(
    public history: HistoryService,
    public settings: SettingsService,
    private cdr: ChangeDetectorRef,
    private Convertor: ConvertorService
  ) {}
  title = 'cuik-convertor';

  @ViewChildren('conversionBtn')
  conversionBtn!: QueryList<ConversionTypeBtnComponent>;

  isPageLoaded: boolean = false;

  conversionButtons!: ConversionTypeBtnComponent[];

  ngOnInit() {
    if (localStorage.getItem('first time') == null)
      localStorage.setItem('first time', 'true');
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
    this.isPageLoaded = true;
    this.conversionButtons = this.conversionBtn.toArray();
  }

  //input data
  InputNumber: string = '';
  OutputNumber: string = '0';

  // page data
  textTypes!: string[];
  loadedPageNumber: number = 1;

  // scroll data
  InScrollData: string = '';
  OutScrollData: string = '';

  ScrollData: string = this.InScrollData + '_' + this.OutScrollData;

  //load the corresponding page and activate buttons
  loadPage(pageNumber: any) {
    this.loadedPageNumber = pageNumber;
    this.InScrollData = '';
    this.OutScrollData = '';
    this.ScrollData = this.InScrollData + '_' + this.OutScrollData;
    this.InputNumber = '';
    this.OutputNumber = '0';

    for (let i = 1; i <= this.conversionButtons.length; i++) {
      if (i === pageNumber) {
        this.conversionButtons[i - 1].isActivated = true;
      } else {
        this.conversionButtons[i - 1].isActivated = false;
      }
    }
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
  updateScrollData(): void {
    this.ScrollData = this.InScrollData + '_' + this.OutScrollData;
    if (this.InputNumber !== '') {
      if (this.settings.bRoundOutput)
        this.OutputNumber = new BigNumber(
          this.Convertor.convert(this.ScrollData, this.InputNumber)
        )
          .decimalPlaces(this.settings.decimals)
          .toString();
      else
        this.OutputNumber = this.Convertor.convert(
          this.ScrollData,
          this.InputNumber
        );
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
