import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-conversion-type-weight-btn',
  templateUrl: './conversion-type-weight-btn.component.html',
  styleUrls: ['./conversion-type-weight-btn.component.scss'],
})
export class ConversionTypeWeightBtnComponent implements OnInit {
  constructor() {}

  @Output()
  buttonClickEmitter: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}

  loadPageNumber() {
    this.buttonClickEmitter.emit(2);
  }
}
