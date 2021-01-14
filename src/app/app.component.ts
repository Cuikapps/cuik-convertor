import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cuik-convertor';

  constructor(private logger: LogService) {}

  loadedPageNumber: number = 1;

  loadPage(pageNumber: any) {
    this.loadedPageNumber = pageNumber;
    this.logger.log(pageNumber);
    this.pageLoader();
  }
  pageLoader() {}
}
