import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import IPhoto from "../../../interfaces/IPhoto";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {
  @Input() photos: IPhoto[] = [];
  rows: any[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: IPhoto[]) {
    const newRows = [];

    if (Array.isArray(photos)) {
      for (let index = 0; index < photos.length; index += 3) {
        newRows.push(photos.slice(index, index + 3));
      }
    }

    return newRows;
  }

}
