import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services/auth.service'
import * as firebase from 'firebase';
import { routing } from './app.routing';

import 'hammerjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	constructor(public authService: AuthService) { }
}
