import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss'],
})
export class ButtonBarComponent implements OnInit {
  constructor(public state: StateService) {}

  ngOnInit(): void {}

  //Feed back
  feedback() {
    this.state.buttonBarToggle = !this.state.buttonBarToggle;
    window.open('https://cuikapps.com/support', '_blank');
  }
}
