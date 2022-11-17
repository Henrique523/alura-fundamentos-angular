import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {SigninComponent} from "./signin/signin.component";
import {VmessageModule} from "../shared/components/vmessage/vmessage.module";

@NgModule({
  declarations: [SigninComponent],
  imports: [ReactiveFormsModule, CommonModule, VmessageModule]
})
export class HomeModule{}
