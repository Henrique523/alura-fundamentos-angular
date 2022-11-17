import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from "@angular/core";
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>();
  @Input() value = '';

  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  handleFilter($event: KeyboardEvent) {
    // @ts-ignore
    this.debounce.next($event.target.value);
  }
}
