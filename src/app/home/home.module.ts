import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {SigninComponent} from "./signin/signin.component";
import {VmessageModule} from "../shared/components/vmessage/vmessage.module";
import {SignupComponent} from "./signup/signup.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VmessageModule,
    FormsModule,
    RouterModule,
  ]
})
export class HomeModule{}
