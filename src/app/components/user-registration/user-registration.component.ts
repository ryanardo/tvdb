import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user = {
     name: '',
      email: '',
     password: '',
   };
  passwordConfirmation;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  createUserRegular() {
     if(this.user.password !== (this.passwordConfirmation)){
       alert("incorrect");
       return;
     }
     else {
      this.authService.createUserRegular(this.user.email, this.user.password)
      .then((res) => {
        firebase.database().ref('user/' + firebase.auth().currentUser.uid).update({
        name: this.user.name ? this.user.name : 'Null',
        })
        console.log(res);
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.log('error: ' + err);
      });
    }

 }

}
