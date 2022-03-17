import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-muutmine',
  templateUrl: './muutmine.component.html',
  styleUrls: ['./muutmine.component.css']
})
export class MuutmineComponent implements OnInit {
  muutmiseVorm: any;

  constructor() { }

  ngOnInit(): void {
    
    const inimene = window.location.href.split("muuda/")[1];

    const inimesedLS = localStorage.getItem("inimesed");
      if (inimesedLS) {
        const inimesed: any[] = JSON.parse(inimesedLS);
        //const inimene = inimesed.find(element.);
        this.muutmiseVorm = new FormGroup({
          id: new FormControl(),
          name: new FormControl(),
          username: new FormControl(),
          email: new FormControl(),
          age: new FormControl(),
        });
      }

    
  }

  onMuuda() {

  }

}
