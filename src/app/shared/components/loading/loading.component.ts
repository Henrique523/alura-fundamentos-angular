import {Component, OnInit} from "@angular/core";
import {map, Observable} from "rxjs";

import {LoadingService} from "./loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  // @ts-ignore
  loading$: Observable<string>;

  constructor(
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.loading$ = this.loadingService
      .getLoading()
      .pipe(map(loadingType => loadingType.valueOf()));
  }
}
