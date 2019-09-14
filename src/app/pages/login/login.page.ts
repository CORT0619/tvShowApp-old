import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSegment, ToastController } from '@ionic/angular';
import { LoginService } from 'src/services/login.service';
// import { ErrorToast } from 'src/app/components/error-toast/error-toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  showLoginForm = true;
  showRegisterForm = false;
  @ViewChild(IonSegment) segment: IonSegment;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.segment.value = 'login';
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required] // add regex for validation
    });

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const login = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    };

    this.loginService.authenticate(login).subscribe(
      response => {
        console.log('response ', response);
        if (response) {
          this.router.navigate(['/menu']);
        }
      },
      err => {
        // TODO: Implement error handling
        this.showErrors(err);
        console.log('err ', err);
      }
    );
  }

  register() {
    console.log('registering...');
    const firstName = this.registerForm.controls['firstName'].value;
    const lastName = this.registerForm.controls['lastName'].value;
    const email = this.registerForm.controls['email'].value;
    const password = this.registerForm.controls['password'].value;

    const registration = {
      firstName,
      lastName,
      email,
      password
    };
  }

  segmentChanged(e) {
    if (this.segment.value === 'login') {
      this.showLoginForm = true;
      this.showRegisterForm = false;
    } else {
      this.showLoginForm = false;
      this.showRegisterForm = true;
    }
  }

  async showErrors(errorMsg) {
    const toast = await this.toastController.create({
      message: errorMsg,
      showCloseButton: true
    });
    toast.present();
  }
}
