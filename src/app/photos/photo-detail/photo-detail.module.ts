import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {PhotoDetailComponent} from "./photo-detail.component";

@NgModule({
  declarations: [PhotoDetailComponent],
  exports: [PhotoDetailComponent],
  imports: [CommonModule]
})
export class PhotoDetailModule {}
