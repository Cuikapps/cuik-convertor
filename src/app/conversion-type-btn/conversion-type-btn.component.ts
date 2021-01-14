import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-conversion-type-btn',
  templateUrl: './conversion-type-btn.component.html',
  styleUrls: ['./conversion-type-btn.component.scss'],
})
export class ConversionTypeBtnComponent implements OnInit {
  constructor() {}

  @Output()
  buttonClickEmitter: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {}

  loadPageNumber() {
    this.buttonClickEmitter.emit(1);
  }
}
