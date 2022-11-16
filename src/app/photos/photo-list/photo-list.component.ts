import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {debounceTime, Subject} from "rxjs";

import IPhoto from "../../interfaces/IPhoto";
import {PhotoService} from "../photo/photo.service";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  title = 'Alurapic';
  photos: IPhoto[] = [];
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage = 1;

  filter = '';
  userName = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['username'];
    this.photos = this.activatedRoute.snapshot.data['photos'];

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  handleFilter($event: KeyboardEvent) {
    // @ts-ignore
    this.debounce.next($event.target.value);
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      })
  }
}
