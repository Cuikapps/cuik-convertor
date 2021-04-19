import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { titles } from '../../data/buttondata.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(public search: SearchService) {}

  @Output('results') r = new EventEmitter<string[]>();

  ngOnInit(): void {
    this.r.emit(titles);
  }

  searchQuery(query: string) {
    this.r.emit(this.search.search(query));
  }
}
