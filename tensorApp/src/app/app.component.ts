import {Component, OnInit} from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  //model: tf.Model;
  //predictions: any;

  getResult() {
    var audio = document.getElementById("aud");
    //this.loadModel();
    document.getElementById("result").innerHTML = "New text!"; //Should replace "New text!" with result
  }

  // Load KERAS model
  async loadModel() {
    //this.model = await tf.loadModel('./assets/model.json');
  }
  
  /* //Predict
  async predict() {

      // Make predications
      const output = this.model.predict(audio) as any;

      // Save predictions
      this.predictions = ;

  } */
  

}
