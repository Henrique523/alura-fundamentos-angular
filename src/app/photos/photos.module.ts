import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {PhotoComponent} from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent, PhotosComponent],
  imports: [HttpClientModule, CommonModule, RouterModule],
})
export class PhotosModule {}
