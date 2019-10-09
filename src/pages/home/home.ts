import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Minproject_1Page } from '../minproject-1/minproject-1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  movieapp(){
    this.navCtrl.push(Minproject_1Page);
  }
}
