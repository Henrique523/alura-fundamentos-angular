import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {lowerCaseValidator} from "../../shared/validators/lower-case.validator";
import {UserNotTakenValidatorService} from "./user-not-taken.validator.service";
import {INewUser} from "../../interfaces/INewUser";
import {SignupService} from "./signup.service";
import {PlatformDetectorService} from "../../core/platform-detector/platform-detector.service";
import {userNamePassword} from "./username-password.validator";

@Component({
  templateUrl: './signup.component.html',
  providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit {
  // @ts-ignore
  signupForm: FormGroup;
  // @ts-ignore
  @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignupService,
    private router: Router,
    private platformDetector: PlatformDetectorService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      fullName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14),
      ]],
    },
      {
        validators: userNamePassword
      });

    this.platformDetector.isPlatformBrowser() && this.inputEmail.nativeElement.focus();
  }

  signup() {
    if (this.signupForm.valid && !this.signupForm.pending) {
      const newUser = this.signupForm.getRawValue() as INewUser;

      this.signUpService.signup(newUser).subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
    }
  }
}
