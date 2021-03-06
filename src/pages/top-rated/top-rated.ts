import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiKeyProvider } from '../../providers/api-key/api-key';

/**
 * Generated class for the TopRatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-rated',
  templateUrl: 'top-rated.html',
})
export class TopRatedPage {
  moviesArray:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private movie : ApiKeyProvider) {
    this.loadLetest();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopRatedPage');
  }
  loadLetest(){
    this.movie.getMoviestop().subscribe(movies => {
      this.moviesArray = movies['results'];
      console.log(movies);
    });
  }
  getDetails(movie){
    this.navCtrl.push("DetailsMoviePage",movie);
  }

  getItems(ev: any) {
    //const val = ev.target.value;
    let val = ev.target.value;
    if (val != 0) {
      this.movie.searchMovie(val).subscribe(movies => {
        this.moviesArray = movies['results'];
      });
    }else {
      this.loadLetest()
  }
}
}
