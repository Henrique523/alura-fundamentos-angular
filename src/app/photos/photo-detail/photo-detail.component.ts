import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

import {PhotoService} from "../photo/photo.service";
import IPhoto from "../../interfaces/IPhoto";

@Component({
  templateUrl: './photo-detail.component.html',
})
export class PhotoDetailComponent implements OnInit {

  // @ts-ignore
  photo$: Observable<IPhoto>;
  // @ts-ignore
  photoId: number;


  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.photoId = this.activatedRoute.snapshot.params.photoId;
    // @ts-ignore
    this.photo$ = this.photoService.findById(this.photoId);
  }
}
