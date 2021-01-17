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
  inputNumber: string = '';
  outputNumber: string = '';
  weight = 'weight';
  loadedPageNumber: number = 1;
  inScrollData: string = 'kilometer';
  outScrollData: string = 'kilometer';
  scrollData: string = this.inScrollData + this.outScrollData;

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
  setInScrollData(scrollIn: string) {
    console.log(scrollIn);
    this.inScrollData = scrollIn;
    this.updateScrollData();
  }
  setOutScrollData(scrollOut: string) {
    this.outScrollData = scrollOut;
    this.updateScrollData();
  }

  // Convert
  updateScrollData() {
    this.scrollData = this.inScrollData + this.outScrollData;
    if (this.inputNumber !== '') {
      this.outputNumber = Convert.convertLength(
        this.scrollData,
        parseFloat(this.inputNumber)
      ).toString();
    } else {
      return;
    }
  }
}
