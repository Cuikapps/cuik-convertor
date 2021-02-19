import {
  AfterViewChecked,
  Component,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ConversionTypeBtnComponent } from './components/conversion-type-btn/conversion-type-btn.component';
import { Convert } from './Convert';

import * as ButtonData from './data/buttondata.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  constructor() {}
  title = 'cuik-convertor';

  @ViewChildren('conversionBtn')
  conversionBtn!: QueryList<ConversionTypeBtnComponent>;

  conversionButtons!: ConversionTypeBtnComponent[];

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
      this.OutputNumber = Convert.convert(this.ScrollData, this.InputNumber);
    } else {
      return;
    }
  }
}
