import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {

  s6na = "312"; //vasakul pool võrdusmärgist on muutuja, paremal pool selle väärtus
  number = 312; //1. numbriga on võimalik teha tehteid, teine on kokkuliitmine sõnadega.
  kahendV22rtus = true; // true/false --- "y" / "n" --- 0 / 1 
  // täisealine / mittetäisealine 

  

  constructor() {
    console.log("AvalehtComponent constructor käivitub");
   }

  ngOnInit(): void {
    console.log("AvalehtComponent ngInOnIt käivitub");
  }

  funktsioon() {
    console.log("funktsioon käivitub");
    this.kahendV22rtus = !this.kahendV22rtus;
    this.number = this.number + 100;
  }

}
