import {Component, Input, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, switchMap, tap} from "rxjs";

import {IPhotoComment} from "../../../interfaces/IPhotoComment";
import {PhotoService} from "../../photo/photo.service";

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css'],
})
export class PhotoCommentsComponent implements OnInit {

  // @ts-ignore
  @Input() photoId: number;
  // @ts-ignore
  comments$: Observable<IPhotoComment[]>;
  // @ts-ignore
  commentForm: FormGroup;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    console.log(this.photoId);
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)]
    });
  }

  save() {
    const comment = this.commentForm.get('comment')?.value as string;
    this.comments$ = this.photoService
      .addComment(this.photoId, comment)
      .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
      .pipe(tap(() => {
        this.commentForm.reset();
      }));
  }
}
