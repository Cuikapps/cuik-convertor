import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { buttonTypes } from '../../engine/data/buttondata.json';

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
    this.title = this.toPascalCase(this.buttonType);
  }

  toPascalCase(btnType: string): string {
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
    for (let i = 1; i <= buttonTypes.length; i++) {
      if (this.buttonType === buttonTypes[i - 1]) {
        this.buttonClickEmitter.emit(i);
        console.log(i);
      }
    }
  }
}
