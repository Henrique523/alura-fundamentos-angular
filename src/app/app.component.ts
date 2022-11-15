import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import IPhoto from "./interfaces/IPhoto";
import {PhotoService} from "./photos/photo/photo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Alurapic';
  photos: IPhoto[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.listFromUser('flavio').subscribe(
      (fotos) => this.photos = fotos,
      (error) => console.log(error.message, 'ERROR')
    );
  }
}
