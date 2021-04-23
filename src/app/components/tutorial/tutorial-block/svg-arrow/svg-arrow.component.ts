import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-svg-arrow',
  templateUrl: './svg-arrow.component.html',
  styleUrls: ['./svg-arrow.component.scss'],
})
export class SvgArrowComponent implements AfterViewChecked {
  constructor(private renderer: Renderer2) {}
  @Input() rotation: number = 0;

  @ViewChild('svg') svg!: ElementRef<HTMLDivElement>;

  ngAfterViewChecked(): void {
    this.renderer.setStyle(
      this.svg.nativeElement,
      'transform',
      `rotateZ(${this.rotation}deg)`
    );
  }
}
