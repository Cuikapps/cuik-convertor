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
  title!: string;

  @Output()
  buttonClickEmitter: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    if (this.buttonType === 'length') {
      this.isActivated = true;
    }
    this.title = this.toCamelCase(this.buttonType);
  }

  toCamelCase(btnType: string): string {
    if (btnType.includes(' ')) {
      let words = btnType.split(' ');
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      return words.join(' ');
    } else {
      let temp: Array<string> = Array.from(btnType);
      temp[0] = temp[0].toUpperCase();
      return temp.join('');
    }
  }

  //send load page number to parent
  loadPageNumber() {
    if (this.buttonType == 'length') {
      this.buttonClickEmitter.emit(1);
    } else if (this.buttonType == 'weight') {
      this.buttonClickEmitter.emit(2);
    } else if (this.buttonType == 'temp') {
      this.buttonClickEmitter.emit(3);
    } else if (this.buttonType == 'volume') {
      this.buttonClickEmitter.emit(4);
    } else if (this.buttonType == 'area') {
      this.buttonClickEmitter.emit(5);
    } else if (this.buttonType == 'speed') {
      this.buttonClickEmitter.emit(6);
    } else if (this.buttonType == 'plane angle') {
      this.buttonClickEmitter.emit(7);
    } else if (this.buttonType == 'time') {
      this.buttonClickEmitter.emit(8);
    } else if (this.buttonType == 'pressure') {
      this.buttonClickEmitter.emit(9);
    } else if (this.buttonType == 'digital storage') {
      this.buttonClickEmitter.emit(10);
    } else if (this.buttonType == 'data transfer rate') {
      this.buttonClickEmitter.emit(11);
    } else if (this.buttonType == 'energy') {
      this.buttonClickEmitter.emit(12);
    } else if (this.buttonType == 'frequency') {
      this.buttonClickEmitter.emit(13);
    } else if (this.buttonType == 'fuel economy') {
      this.buttonClickEmitter.emit(14);
    }
  }
}
