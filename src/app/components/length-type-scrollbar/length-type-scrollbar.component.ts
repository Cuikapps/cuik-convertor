import { Component, EventEmitter, Input, Output } from '@angular/core';
import { buttonTypes } from '../../engine/data/buttondata.json';
import { data } from '../../engine/data/conversiondata.json';

@Component({
  selector: 'app-length-type-scrollbar',
  templateUrl: './length-type-scrollbar.component.html',
  styleUrls: ['./length-type-scrollbar.component.scss'],
})
export class LengthTypeScrollbarComponent {
  constructor() {}

  @Output() InScrollEmitter = new EventEmitter<string>();
  @Output() OutScrollEmitter = new EventEmitter<string>();
  @Input() inOut: string = 'length1';
  buttonTypes: Array<string> = buttonTypes;

  values: Array<Array<string>> = this.initValues();

  initValues() {
    let arr: Array<Array<string>> = new Array();
    for (let title of data) {
      arr.push(title);
    }
    return arr;
  }

  // event from radio buttons
  changeScroll(e: any) {
    if (e.target.name === 'radio-in') {
      this.InScrollEmitter.emit(e.target.value);
    } else if (e.target.name === 'radio-out') {
      this.OutScrollEmitter.emit(e.target.value);
    } else {
      return;
    }
  }
}
