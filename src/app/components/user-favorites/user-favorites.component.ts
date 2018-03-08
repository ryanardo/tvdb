import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { TMDB_API } from './../../services/api/tmdb.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.css'],
  providers: [TMDB_API]
})

export class UserFavoritesComponent implements OnInit {

  public href: string = "";
  public id: string="";
  public content;
  public actor;
  public similar;
  public video;
  public stringId;


  moviesId: FirebaseListObservable<any[]>;
  idArray: string[];
  constructor(private database: AngularFireDatabase, private tmdb_api: TMDB_API, private router: Router) {
    this.moviesId = this.database.list('userSave');


  }

  goToDetailsTv(movieId: string) {
    this.router.navigate(['tv',movieId ])
  }
  goToDetailsMovie(movieId: string) {
    this.router.navigate(['movie',movieId ])
  }


  ngOnInit() {
    // for(let items in this.moviesId){
    //   alert(items);
    // }
    // this.tmdb_api.getMovieById(this.moviesId[0]).subscribe(response => {
    //   this.content=response.json()
    //   console.log(this.moviesId);
    // });
  }

}
