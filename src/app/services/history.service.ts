import { Injectable } from '@angular/core';
import { History } from '../classes/History';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private historyList: Array<History> = new Array<History>();

  get HistoryList() {
    return this.historyList;
  }

  public addCalculation(calculation: History) {
    this.historyList.push(calculation);
  }

  public clearHistory() {
    while (this.historyList.length > 0) {
      this.historyList.pop();
    }
  }

  constructor() {}
}
