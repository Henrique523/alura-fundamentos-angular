import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {AuthService} from "../../core/auth/auth.service";
import {PlatformDetectorService} from "../../core/platform-detector/platform-detector.service";

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit{

  // @ts-ignore
  loginForm: FormGroup;
  // @ts-ignore
  fromUrl: string;
  // @ts-ignore
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params['fromUrl']);

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.authenticate(userName, password).subscribe(
      () => this.fromUrl
        ? this.router.navigateByUrl(this.fromUrl)
        : this.router.navigate(['user', userName]),
      (err: any) => {
        console.log(err, 'ERRO');
        this.loginForm.reset();
        this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
        alert('Invalid username or password');
      }
    );
  }

}
