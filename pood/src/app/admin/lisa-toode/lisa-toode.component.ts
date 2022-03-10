import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  lisaToode(lisamiseVorm: any) {
    if (lisamiseVorm.valid) {
      // console.log(lisamiseVorm); //ngForm {form: adsd, touched (hiirega peale minemine): true}
      // console.log(lisamiseVorm.value);// {nimi: "41", hind: 1999}
      // const tootedLS = localStorage.getItem("tooted");
      // if (tootedLS) {
      //   const tootedKorrektselKujul = JSON.parse(tootedLS);
      //   tootedKorrektselKujul.push(lisamiseVorm.value);
      //   localStorage.setItem("tooted",JSON.stringify(tootedKorrektselKujul));
        
      // } else {
      //   const tooted = []
      //   tooted.push(lisamiseVorm.value);
      //   localStorage.setItem("tooted",JSON.stringify(tooted));

      // }
      // localStorage.setItem("tooted",JSON.stringify(lisamiseVorm.value));
      this.http.post("https://veebipood-59ea9-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
        lisamiseVorm.value).subscribe();
      lisamiseVorm.reset();
      }
    
  }

}
