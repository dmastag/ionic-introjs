import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import introJs from 'intro.js/intro.js';

declare var introJs: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(introJs.introJs());
  }

  intro() {

    let intro = introJs.introJs();
    intro.setOptions({
      steps: [{
        element: '#step1',
        intro: 'Step one description',
        tooltipPosition: 'bottom'
      },
      {
        element: '#step2',
        intro: 'Step <i>two</i> description',
        tooltipPosition: 'bottom'
      },
      {
        element: '#step3',
        intro: 'Step <span style="color: green;">three</span> description',
        tooltipPosition: 'bottom'
      }]
    });

    // Start tutorial
    intro.start();
  }

}
