import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toode',
  templateUrl: './toode.component.html',
  styleUrls: ['./toode.component.css']
})
export class ToodeComponent implements OnInit {
  toode: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // console.log(location.href);
    // console.log(location.href.split("toode/"));
    // console.log(location.href.split("toode/")[1]);

    const tooteNimi = location.href.split("toode/")[1];
    // // kõik tooted üles
    // const tootedLS = localStorage.getItem("tooted");
    // if (tootedLS) {
    //   const tooted: any [] = JSON.parse(tootedLS);
    //   this.toode = tooted.find(element => 
    //     element.nimi.replace(' ','-').toLowerCase() === tooteNimi);
    //   console.log(this.toode)
    // }
      this.http.get<any>("https://veebipood-59ea9-default-rtdb.europe-west1.firebasedatabase.app/tooted.json").subscribe(objectFirebasest => {
        const tooted = [];
        for (const key in objectFirebasest) {
          tooted.push(objectFirebasest[key]);
        }
        this.toode = tooted.find(element => 
          element.nimi.replace(' ','-').toLowerCase() === tooteNimi);
      });
  }

}
