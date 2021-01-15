import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-length-type-scrollbar',
  templateUrl: './length-type-scrollbar.component.html',
  styleUrls: ['./length-type-scrollbar.component.scss'],
})
export class LengthTypeScrollbarComponent implements OnInit, OnDestroy {
  constructor() {}

  loop: any;

  @Output() inScrollEmitter = new EventEmitter<string>();
  @Output() outScrollEmitter = new EventEmitter<string>();

  @Input() inOut: number = 1;

  ngOnInit(): void {
    this.loop = setInterval(() => {
      this.submitForms();
    }, 1000);
  }

  submitForms() {
    let radioIn = document.getElementsByName('radio-in') as any;
    let radioOut = document.getElementsByName('radio-out') as any;

    if (this.inOut === 1) {
      for (let i = 0, length = radioIn.length; i < length; i++) {
        if (radioIn[i].checked) {
          this.inScrollEmitter.emit(radioIn[i].value);
          break;
        }
      }
    } else {
      for (let i = 0, length = radioOut.length; i < length; i++) {
        if (radioOut[i].checked) {
          this.outScrollEmitter.emit(radioOut[i].value);
          break;
        }
      }
    }
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.loop) {
      clearInterval(this.loop);
    }
  }
}
