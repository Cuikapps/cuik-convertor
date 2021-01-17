import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-length-type-scrollbar',
  templateUrl: './length-type-scrollbar.component.html',
  styleUrls: ['./length-type-scrollbar.component.scss'],
})
export class LengthTypeScrollbarComponent {
  constructor() {}

  @Output() lengthInScrollEmitter = new EventEmitter<string>();
  @Output() lengthOutScrollEmitter = new EventEmitter<string>();
  @Output() weightInScrollEmitter = new EventEmitter<string>();
  @Output() weightOutScrollEmitter = new EventEmitter<string>();

  @Input() inOut: number = 1;

  // event from radio buttons
  changeScroll(e: any) {
    if (e.target.name == 'length-radio-in') {
      this.lengthInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'length-radio-out') {
      this.lengthOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'weight-radio-in') {
      this.weightInScrollEmitter.emit(e.target.value);
    } else {
      this.weightOutScrollEmitter.emit(e.target.value);
    }
  }
}
