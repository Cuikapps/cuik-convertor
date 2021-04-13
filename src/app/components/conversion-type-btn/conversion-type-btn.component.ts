import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  Renderer2,
} from '@angular/core';
import { titles } from '../../data/buttondata.json';

@Component({
  selector: 'app-conversion-type-btn',
  templateUrl: './conversion-type-btn.component.html',
  styleUrls: ['./conversion-type-btn.component.scss'],
})
export class ConversionTypeBtnComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  @Input() buttonType: string = 'length';

  isActivated: boolean = false;
  inView: boolean = false;

  @Output()
  buttonClickEmitter: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    if (this.buttonType === 'length') {
      this.isActivated = true;
    }
  }

  //send load page number to parent
  loadPageNumber() {
    for (let i = 1; i <= titles.length; i++) {
      if (this.buttonType === titles[i - 1]) {
        this.buttonClickEmitter.emit(i);
      }
    }
  }

  load({ target, visible }: { target: Element; visible: boolean }) {
    this.renderer.addClass(target, visible ? 'active' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active');
  }
}
