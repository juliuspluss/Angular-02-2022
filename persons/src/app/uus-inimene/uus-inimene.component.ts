import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uus-inimene',
  templateUrl: './uus-inimene.component.html',
  styleUrls: ['./uus-inimene.component.css']
})
export class UusInimeneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lisaInimene(lisamiseVorm: any) {
    console.log(lisamiseVorm);
    localStorage.setItem("inimesed",JSON.stringify(lisamiseVorm.value));
  }

}
