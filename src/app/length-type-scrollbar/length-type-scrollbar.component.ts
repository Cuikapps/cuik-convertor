import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-length-type-scrollbar',
  templateUrl: './length-type-scrollbar.component.html',
  styleUrls: ['./length-type-scrollbar.component.scss'],
})
export class LengthTypeScrollbarComponent {
  constructor() {}

  @Output() inScrollEmitter = new EventEmitter<string>();
  @Output() outScrollEmitter = new EventEmitter<string>();

  @Input() inOut: number = 1;

  changeScroll(e: any) {
    if (e.target.name == 'radio-in') {
      this.inScrollEmitter.emit(e.target.value);
    } else {
      this.outScrollEmitter.emit(e.target.value);
    }
  }
}
