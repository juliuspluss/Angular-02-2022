import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valitud',
  templateUrl: './valitud.component.html',
  styleUrls: ['./valitud.component.css']
})
export class ValitudComponent implements OnInit {
  inimesed: any[] = [];
  vanusKogusumma = 0;
  vanusKeskmine = 0;
  inimesteArv = 0;

  constructor() { }

  ngOnInit(): void {
    const valitudStoragest = sessionStorage.getItem("valitud");
    if (valitudStoragest) {
      this.inimesed = JSON.parse(valitudStoragest);
    }


    this.inimesed.forEach(element => this.vanusKogusumma = this.vanusKogusumma + element.age);
    this.inimesed.forEach(element => this.vanusKeskmine = this.vanusKogusumma / element.id);
    this.inimesed.forEach(element => this.inimesteArv = element.id);
  }

  tyhjenda() {
    this.inimesed = [];
    sessionStorage.setItem("valitud",JSON.stringify(this.inimesed));
  }

  lisaInimene(inimene: any) {
    this.inimesed.push(inimene);
    sessionStorage.setItem("valitud",JSON.stringify(this.inimesed));
    this.vanusKogusumma = 0;
    this.inimesed.forEach(element => this.vanusKogusumma = this.vanusKogusumma + element.age);
    this.inimesed.forEach(element => this.vanusKeskmine = this.vanusKogusumma / element.id);
    this.inimesed.forEach(element => this.inimesteArv = element.id);
  }

  kustutaInimene(inimene: any) {
    const j2rjekorraNumber = this.inimesed.indexOf(inimene);
    console.log(j2rjekorraNumber);
    this.inimesed.splice(j2rjekorraNumber,1);
    sessionStorage.setItem("valitud",JSON.stringify(this.inimesed));
    this.vanusKogusumma = 0;
    this.inimesed.forEach(element => this.vanusKogusumma = this.vanusKogusumma + element.age);
    this.inimesed.forEach(element => this.vanusKeskmine = this.vanusKogusumma / element.id);
    this.inimesed.forEach(element => this.inimesteArv = element.id);
  }

}
