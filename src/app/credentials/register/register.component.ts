import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  formSubmitted: boolean = false;
  loginError: boolean = false;

  constructor(private _userService: UserService, private router: Router) {
    this.registerForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }


  ngOnInit() {
  }

  onSubmit() {
    this.formSubmitted = true;
    //console.log(this.loginForm.value);
    this._userService.addUser(this.registerForm.value)
      .then(
      data => {
        this.router.navigate(['./../../verify']);
      },
      err => {
        console.log(err);
        this.formSubmitted = false;
        this.loginError = true;
      })
  }

}
