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
     email: '',
     password: '',
   };
  passwordConfirmation;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  createUserRegular() {
    if(this.user.password.length < 6){
       alert("Your password must have at least 6 characters.");
       return;
    }
    else if(this.user.password !== (this.passwordConfirmation)){
      alert("incorrect");
      return;
    }
    else {
      this.authService.createUserRegular(this.user.email, this.user.password)
      .then((res) => {
        firebase.database().ref('user/' + firebase.auth().currentUser.uid).update({
        test: "Rodnier",
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
