import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {PhotoModule} from "./photo/photo.module";
import {PhotoFormModule} from "./photo-form/photo-form.module";
import {PhotoListModule} from "./photo-list/photo-list.module";

@NgModule({
  imports: [
    PhotoModule,
    PhotoFormModule,
    PhotoListModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
})
export class PhotosModule {
}
