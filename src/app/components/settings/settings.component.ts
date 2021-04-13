import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(public state: StateService, public settings: SettingsService) {}

  ngOnInit(): void {}
}
