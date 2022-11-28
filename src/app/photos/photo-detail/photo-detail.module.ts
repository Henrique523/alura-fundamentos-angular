import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

import {PhotoDetailComponent} from "./photo-detail.component";
import {PhotoCommentsComponent} from "./photo-comments/photo-comments.component";
import {PhotoModule} from "../photo/photo.module";
import {VmessageModule} from "../../shared/components/vmessage/vmessage.module";
import {PhotoOwnerOnlyDirective} from "./photo-owner-only/photo-owner-only.directive";

@NgModule({
  declarations: [
    PhotoDetailComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective,
  ],
  exports: [PhotoDetailComponent],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    ReactiveFormsModule,
    VmessageModule,
  ],
})
export class PhotoDetailModule {}
