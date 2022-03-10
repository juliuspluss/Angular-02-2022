import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  tooted: any[] = [
    // {nimi: 41, hind: 1999}, // [object Object]
    // {nimi: 13, hind: 721},
    // {nimi: true, hind: 1500},
    // {nimi: 'adsdas', hind: 199}
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // const tootedLS = localStorage.getItem("tooted");
    // if (tootedLS) {
    //   this.tooted = JSON.parse(tootedLS);
    // }
    this.http.get<any>("https://veebipood-59ea9-default-rtdb.europe-west1.firebasedatabase.app/tooted.json").subscribe(objectFirebasest => {
      for (const key in objectFirebasest) {
        this.tooted.push(objectFirebasest[key]);
      }
    });
  }

  onLisaOstukorvi(toode: any) {
    // '[{nimi: true, hind: 1500}, {nimi: 'sadasd', hind: 199}]'
    const ostukorvStoragest = sessionStorage.getItem("ostukorv");

    if (ostukorvStoragest) {
      const ostukorviTooted = JSON.parse(ostukorvStoragest);
      ostukorviTooted.push(toode);
      sessionStorage.setItem("ostukorv",JSON.stringify(ostukorviTooted));

    } else {
      const ostukorviTooted: any = [];
      ostukorviTooted.push(toode);

      sessionStorage.setItem("ostukorv",JSON.stringify(ostukorviTooted));

    }
    

    // toode1, toode2
    // .push() toode3
    // toode1, toode2, toode3

  }

}
