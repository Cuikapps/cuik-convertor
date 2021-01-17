import { Component, ViewChild } from '@angular/core';
import { LogService } from './log.service';
import { ConversionTypeBtnComponent } from './conversion-type-btn/conversion-type-btn.component';
import { Convert } from './Convert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cuik-convertor';

  @ViewChild('lengthBtn') lengthBtn!: ConversionTypeBtnComponent;
  @ViewChild('weightBtn') weightBtn!: ConversionTypeBtnComponent;

  //input data
  lengthInputNumber: string = '';
  lengthOutputNumber: string = '';
  weightInputNumber: string = '';
  weightOutputNumber: string = '';

  // page data
  weight = 'weight';
  loadedPageNumber: number = 1;

  // scroll data
  lengthInScrollData: string = 'kilometer';
  lengthOutScrollData: string = 'kilometer';
  weightInScrollData: string = 'metricTon';
  weightOutScrollData: string = 'metricTon';
  lengthScrollData: string = this.lengthInScrollData + this.lengthOutScrollData;
  weightScrollData: string = this.weightInScrollData + this.weightOutScrollData;

  constructor(private logger: LogService) {}

  //load the corresponding page and activate buttons
  loadPage(pageNumber: any) {
    this.loadedPageNumber = pageNumber;
    this.logger.log(pageNumber);

    if (this.loadedPageNumber == 1) {
      this.lengthBtn.isActivated = true;
      this.weightBtn.isActivated = false;
    } else if (this.loadedPageNumber == 2) {
      this.lengthBtn.isActivated = false;
      this.weightBtn.isActivated = true;
    }
  }

  // get scroll data from scroll component
  setLengthInScrollData(scrollIn: string) {
    console.log(scrollIn);
    this.lengthInScrollData = scrollIn;
    this.updateLengthScrollData();
  }
  setLengthOutScrollData(scrollOut: string) {
    this.lengthOutScrollData = scrollOut;
    this.updateLengthScrollData();
  }
  setWeightInScrollData(scrollIn: string) {
    console.log(scrollIn);
    this.weightInScrollData = scrollIn;
    this.updateWeightScrollData();
  }
  setWeightOutScrollData(scrollOut: string) {
    this.weightOutScrollData = scrollOut;
    this.updateWeightScrollData();
  }

  // Convert
  updateLengthScrollData() {
    this.lengthScrollData = this.lengthInScrollData + this.lengthOutScrollData;
    if (this.lengthInputNumber !== '') {
      this.lengthOutputNumber = Convert.convertLength(
        this.lengthScrollData,
        parseFloat(this.lengthInputNumber)
      ).toString();
    } else {
      return;
    }
  }
  updateWeightScrollData() {
    this.weightScrollData = this.weightInScrollData + this.weightOutScrollData;
    if (this.weightInputNumber !== '') {
      this.weightOutputNumber = Convert.convertWeight(
        this.weightScrollData,
        parseFloat(this.weightInputNumber)
      ).toString();
    } else {
      return;
    }
  }
}
