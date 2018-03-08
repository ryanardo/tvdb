import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-search-results',
	templateUrl: './search-results.component.html',
	styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

	@Input() childSearchResults;
	constructor() { }

	ngOnInit() {
	}

	saveItem(itemId: string, mediaType: string, backdrop: string, name: string) {
		alert(firebase.auth().currentUser.uid);
		alert(itemId);
		firebase.database().ref('userSave/').push({
			itemId: itemId,
			userId: firebase.auth().currentUser.uid,
			backdrop: backdrop,
			name: name,
			mediaType: mediaType

		})
	}

}
