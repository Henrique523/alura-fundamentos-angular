import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {PhotoService} from "../photo/photo.service";
import {AlertService} from "../../shared/components/alert/alert.service";
import {UserService} from "../../core/user/user.service";

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  // @ts-ignore
  photoForm: FormGroup;
  // @ts-ignore
  file: File;
  // @ts-ignore
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    })
  }

  upload() {
    const description = this.photoForm.get('description')?.value;
    const allowComments = this.photoForm.get('allowComments')?.value;

    this.photoService.upload(description, allowComments, this.file).subscribe(
      () => {
        this.alertService.success('Upload complete!', true);
        this.router.navigate(['/user', this.userService.getUserName()])
      }
    );
  }

  handleChangeEvent(event: Event) {
    // @ts-ignore
    this.file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (event: any) => this.preview = event.target.result;

    reader.readAsDataURL(this.file);

    console.log(this.file);
  }

}
