import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { History } from '../../classes/History';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-history-tab',
  templateUrl: './history-tab.component.html',
  styleUrls: ['./history-tab.component.scss'],
})
export class HistoryTabComponent implements OnInit {
  constructor(public history: HistoryService, public state: StateService) {}

  ngOnInit(): void {}
  historyList: History[] = this.history.HistoryList;

  //toggles the history tab
  toggleHistory() {
    this.state.buttonBarToggle = !this.state.buttonBarToggle;
    this.state.historyToggle = !this.state.historyToggle;
  }

  //Clear the conversion history
  clearHistory() {
    this.history.clearHistory();
  }
}
