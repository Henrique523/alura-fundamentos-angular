import {Component, Input, OnInit} from '@angular/core';

import IPhoto from "../../../interfaces/IPhoto";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  @Input() photos: IPhoto[] = [];

  constructor() {}

  ngOnInit(): void {}

}
