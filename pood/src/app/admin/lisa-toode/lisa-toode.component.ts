import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lisaToode(lisamiseVorm: any) {
    if (lisamiseVorm.valid) {
    console.log(lisamiseVorm); //ngForm {form: adsd, touched (hiirega peale minemine): true}
    console.log(lisamiseVorm.value)// {nimi: "41", hind: 1999}
    }
  }

}
