import { UserService } from './../../shared/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  formSubmitted: boolean = false;
  loginError: boolean = false;

  constructor(private _userService: UserService, private router: Router) {
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }


  ngOnInit() {
    // if (localStorage.getItem('currentUserId')) {
    //   // this._userService.getUserById()
    //   //   .subscribe((res) => {
    //   //     if (localStorage.getItem('currentUserId') && res._id === localStorage.getItem('currentUserId')) {
    //   //       this.router.navigate(['./library/results/1']);
    //   //     }
    //   //   })
    // }
  }

  onSubmit() {
    this.formSubmitted = true;

    this._userService.getUser(this.loginForm.value).then((snapshot) => {
      for (var key in snapshot.val()) {
        if(snapshot.val()[key].password == this.loginForm.value.password) {
          localStorage.setItem('username', snapshot.val()[key].username);
          this.router.navigate(['./../home']);
        } else {
          this.loginError = true;        
        }
      }
    }).catch((err) => {
      this.loginError = true;
      console.log(err);
    })

      // (
      // data => {
      //   this.navigateTo('./../library/results/1', data);
      // },
      // err => {
      //   console.log(err);
      //   this.formSubmitted = false;
      //   this.loginError = true;
      // })
  }

  private navigateTo(path: string, userData) {
    this.router.navigate([path]);
  }

}
