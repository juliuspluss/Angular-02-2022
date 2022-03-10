import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inimesed',
  templateUrl: './inimesed.component.html',
  styleUrls: ['./inimesed.component.css']
})
export class InimesedComponent implements OnInit {
  inimesed = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "age": 45
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "age": 22
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "age": 32
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "age": 59
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "age": 16
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "age": 47
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "age": 60
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "age": 39
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "age": 28
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email":  "Rey.Padberg@karina.biz",
      "age": 19
   }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onLisaInimene(inimene: any) {
    const valitudStoragest = sessionStorage.getItem("valitud");
    if (valitudStoragest) {
      const valitudInimesed = JSON.parse(valitudStoragest);
      valitudInimesed.push(inimene);
      sessionStorage.setItem("valitud",JSON.stringify(valitudInimesed));
    } else {
      const valitudInimesed: any = [];
      valitudInimesed.push(inimene);
      sessionStorage.setItem("valitud",JSON.stringify(valitudInimesed));
    }
  }

}
