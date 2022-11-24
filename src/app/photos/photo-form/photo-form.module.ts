import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {PhotoFormComponent} from "./photo-form.component";
import {VmessageModule} from "../../shared/components/vmessage/vmessage.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    PhotoFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VmessageModule,
    RouterModule,
  ]
})
export class PhotoFormModule {}
