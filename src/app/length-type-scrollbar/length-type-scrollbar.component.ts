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
  @Output() tempInScrollEmitter = new EventEmitter<string>();
  @Output() tempOutScrollEmitter = new EventEmitter<string>();
  @Output() volumeInScrollEmitter = new EventEmitter<string>();
  @Output() volumeOutScrollEmitter = new EventEmitter<string>();
  @Output() areaInScrollEmitter = new EventEmitter<string>();
  @Output() areaOutScrollEmitter = new EventEmitter<string>();
  @Output() speedInScrollEmitter = new EventEmitter<string>();
  @Output() speedOutScrollEmitter = new EventEmitter<string>();
  @Output() angleInScrollEmitter = new EventEmitter<string>();
  @Output() angleOutScrollEmitter = new EventEmitter<string>();
  @Output() timeInScrollEmitter = new EventEmitter<string>();
  @Output() timeOutScrollEmitter = new EventEmitter<string>();
  @Output() pressureInScrollEmitter = new EventEmitter<string>();
  @Output() pressureOutScrollEmitter = new EventEmitter<string>();
  @Output() digStorageInScrollEmitter = new EventEmitter<string>();
  @Output() digStorageOutScrollEmitter = new EventEmitter<string>();
  @Output() dataTransferInScrollEmitter = new EventEmitter<string>();
  @Output() dataTransferOutScrollEmitter = new EventEmitter<string>();
  @Output() energyInScrollEmitter = new EventEmitter<string>();
  @Output() energyOutScrollEmitter = new EventEmitter<string>();
  @Output() frequencyInScrollEmitter = new EventEmitter<string>();
  @Output() frequencyOutScrollEmitter = new EventEmitter<string>();
  @Output() fuelInScrollEmitter = new EventEmitter<string>();
  @Output() fuelOutScrollEmitter = new EventEmitter<string>();

  @Input() inOut: number = 1;

  // event from radio buttons
  changeScroll(e: any) {
    if (e.target.name == 'length-radio-in') {
      this.lengthInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'length-radio-out') {
      this.lengthOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'weight-radio-in') {
      this.weightInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'weight-radio-out') {
      this.weightOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'temp-radio-in') {
      this.tempInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'temp-radio-out') {
      this.tempOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'volume-radio-in') {
      this.volumeInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'volume-radio-out') {
      this.volumeOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'area-radio-in') {
      this.areaInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'area-radio-out') {
      this.areaOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'speed-radio-in') {
      this.speedInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'speed-radio-out') {
      this.speedOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'angle-radio-in') {
      this.angleInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'angle-radio-out') {
      this.angleOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'time-radio-in') {
      this.timeInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'time-radio-out') {
      this.timeOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'pressure-radio-in') {
      this.pressureInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'pressure-radio-out') {
      this.pressureOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'digStorage-radio-in') {
      this.digStorageInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'digStorage-radio-out') {
      this.digStorageOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'dataTransfer-radio-in') {
      this.dataTransferInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'dataTransfer-radio-out') {
      this.dataTransferOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'energy-radio-in') {
      this.energyInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'energy-radio-out') {
      this.energyOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'frequency-radio-in') {
      this.frequencyInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'frequency-radio-out') {
      this.frequencyOutScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'fuel-radio-in') {
      this.fuelInScrollEmitter.emit(e.target.value);
    } else if (e.target.name == 'fuel-radio-out') {
      this.fuelOutScrollEmitter.emit(e.target.value);
    }
  }
}
