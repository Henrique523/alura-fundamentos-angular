import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {PhotoService} from "../photo/photo.service";
import IPhoto from "../../interfaces/IPhoto";
import {Observable} from "rxjs";
import {IPhotoComment} from "../../interfaces/IPhotoComment";

@Component({
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {

  // @ts-ignore
  photo$: Observable<IPhoto>;
  // @ts-ignore
  comments$: Observable<IPhotoComment[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(id);
    this.comments$ = this.photoService.getComments(id);
  }
}
