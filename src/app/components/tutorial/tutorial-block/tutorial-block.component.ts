import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  Renderer2,
} from '@angular/core';

export type sides = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';

@Component({
  selector: 'app-tutorial-block',
  templateUrl: './tutorial-block.component.html',
  styleUrls: ['./tutorial-block.component.scss'],
})
export class TutorialBlockComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  @Input() title!: string;
  @Input() text!: string;
  @Input() arrow!: boolean;
  @Input('btn-one-text') button1Text!: string;
  @Input('btn-two-text') button2Text!: string;
  @Input('btn-one-color') button1Color!: string;
  @Input('btn-two-color') button2Color!: string;
  @Input('btn-one-hover') button1Hover!: string;
  @Input('btn-two-hover') button2Hover!: string;
  @Input('arrow-side') arrowSide!: sides;

  @Output('btn-one-action')
  button1Action: EventEmitter<void> = new EventEmitter<void>();
  @Output('btn-two-action')
  button2Action: EventEmitter<void> = new EventEmitter<void>();

  toggleB1Hover(ref: HTMLDivElement, hover: boolean) {
    if (hover)
      this.renderer.setStyle(ref, 'background-color', this.button1Hover);
    else this.renderer.setStyle(ref, 'background-color', this.button1Color);
  }
  toggleB2Hover(ref: HTMLDivElement, hover: boolean) {
    if (hover)
      this.renderer.setStyle(ref, 'background-color', this.button2Hover);
    else this.renderer.setStyle(ref, 'background-color', this.button2Color);
  }

  btnOneClick() {
    this.button1Action.emit();
  }
  btnTwoClick() {
    this.button2Action.emit();
  }
  getRotation() {
    switch (this.arrowSide) {
      case 'N':
        return 0;
      case 'NE':
        return 45;
      case 'E':
        return 90;
      case 'SE':
        return 135;
      case 'S':
        return 180;
      case 'SW':
        return 225;
      case 'W':
        return 270;
      case 'NW':
        return 315;
      default:
        return 0;
    }
  }

  ngOnInit(): void {}
}
