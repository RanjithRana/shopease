import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges {
  searchQuery: string = '';
  private searchQuerySubject = new Subject<string>();

  @Output() searchEvent = new EventEmitter<string>();
  @Input() resetSearch:boolean =false;

  constructor(){
    this.searchQuerySubject.pipe(debounceTime(300)).subscribe((query) => {
      this.searchEvent.emit(query);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetSearch'] && changes['resetSearch'].currentValue) {
      this.searchQuery = '';
    } 
  }

  onSearch() {
    this.searchQuerySubject.next(this.searchQuery);
  }  
}
