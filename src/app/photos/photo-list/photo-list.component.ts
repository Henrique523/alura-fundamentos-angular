import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {debounceTime, Subject} from "rxjs";

import IPhoto from "../../interfaces/IPhoto";
import {PhotoService} from "../photo/photo.service";
import {LoadingService} from "../../shared/components/loading/loading.service";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: IPhoto[] = [];
  hasMore: boolean = true;
  currentPage = 1;

  filter = '';
  userName = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.username;
      this.photos = params.photos;
    });
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length) {
          this.hasMore = false;
        }
      })
  }
}
