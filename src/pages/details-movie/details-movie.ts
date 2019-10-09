import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ApiKeyProvider } from '../../providers/api-key/api-key';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SocialSharing } from '@ionic-native/social-sharing';


/**
 * Generated class for the DetailsMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-movie',
  templateUrl: 'details-movie.html',
})
export class DetailsMoviePage {
 moviedata:any=[];
  playing: boolean;
   constructor(public navCtrl: NavController, public navParams: NavParams,private movieApi: ApiKeyProvider,private tts: TextToSpeech,private socialSharing:SocialSharing,private ActionSheetController: ActionSheetController ) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsMoviePage');
    this.moviedata = this.navParams.data;
    console.log(this.moviedata);
}

openVideo(movie){
    this.navCtrl.push("VideoPage",movie);
}

 talk(textOrOptions:string){
  this.tts.speak(textOrOptions);
}

stop(){
this.tts.speak("").then((value)=>{
this.playing=false;
});
}



shareFac(){
  let title = this.moviedata.title;
  let overview = this.moviedata.overview;
  let numberphone = "0882372538";
  this.socialSharing.shareViaSMS('Moive title'+title+':'+overview,numberphone);
}

}//end
