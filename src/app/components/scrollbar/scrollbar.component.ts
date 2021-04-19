import { Component, EventEmitter, Input, Output } from '@angular/core';
import { data } from '../../data/conversiondata.json';
import * as ButtonData from '../../data/buttondata.json';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
})
export class ScrollbarComponent {
  constructor() {}

  @Output() InScrollEmitter = new EventEmitter<string>();
  @Output() OutScrollEmitter = new EventEmitter<string>();
  @Input() inOut: string = 'length1';

  values: Array<Array<string>> = data;
  buttonTypes = ButtonData.titles;

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
