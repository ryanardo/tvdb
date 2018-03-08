import { Component } from '@angular/core';
import { routing } from './app.routing';
import {AuthService} from './services/auth.service'
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'] 

})

export class AppComponent {
	constructor(public authService: AuthService){
	}
}
