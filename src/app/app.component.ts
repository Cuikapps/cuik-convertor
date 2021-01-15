import { Component, ViewChild, OnInit } from '@angular/core';
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
  @ViewChild('inputNumber') inputNumber!: HTMLInputElement;
  @ViewChild('outputNumber') outputNumber!: HTMLInputElement;
  weight = 'weight';

  constructor(private logger: LogService) {}

  loadedPageNumber: number = 1;
  inScrollData: string = 'kilometer';
  outScrollData: string = 'kilometer';
  scrollData: string = this.inScrollData + this.outScrollData;

  //call from child component
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

  setInScrollData(scrollIn: string) {
    this.inScrollData = scrollIn;
    this.updateScrollData();
  }
  setOutScrollData(scrollOut: string) {
    this.outScrollData = scrollOut;
    this.updateScrollData();
  }
  updateScrollData() {
    this.scrollData = this.inScrollData + this.outScrollData;
    console.log(
      Convert.convertLength(this.scrollData, parseFloat(this.inputNumber.value))
    );
  }
}
