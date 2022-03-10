import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaata-tooteid',
  templateUrl: './vaata-tooteid.component.html',
  styleUrls: ['./vaata-tooteid.component.css']
})
export class VaataTooteidComponent implements OnInit {
  tooted:any [] = [];

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

  kustuta(toode:any) {
    const j2rjekorraNumber = this.tooted.indexOf(toode);
    this.tooted.splice(j2rjekorraNumber,1);
    // localStorage.setItem("tooted", JSON.stringify(this.tooted));
    this.http.put("https://veebipood-59ea9-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
        this.tooted).subscribe();
  }
}
