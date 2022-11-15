import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import IPhoto from "../../interfaces/IPhoto";
import {PhotoService} from "../photo/photo.service";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  title = 'Alurapic';
  photos: IPhoto[] = [];

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.params['username'];

    this.photoService.listFromUser(username).subscribe(
      (fotos) => this.photos = fotos,
      (error) => console.log(error.message, 'ERROR')
    );
  }

}
