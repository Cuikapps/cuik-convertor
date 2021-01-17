import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-conversion-type-btn',
  templateUrl: './conversion-type-btn.component.html',
  styleUrls: ['./conversion-type-btn.component.scss'],
})
export class ConversionTypeBtnComponent implements OnInit {
  constructor() {}

  @Input() buttonType: string = 'length';

  isActivated: boolean = false;

  @Output()
  buttonClickEmitter: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    if (this.buttonType === 'length') {
      this.isActivated = true;
    }
  }

  //send load page number to parent
  loadPageNumber() {
    if (this.buttonType == 'length') {
      this.buttonClickEmitter.emit(1);
    } else {
      this.buttonClickEmitter.emit(2);
    }
  }
}
