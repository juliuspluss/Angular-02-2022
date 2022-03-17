import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'harjutused';

  n2itaKollast = false;
  n2itaRohelist = false;
  n2itaSinist = false;
  n2itaPunast = false;
  s6na = "naerata";
  number = 7;
   

  onKlikkimisel() {
    this.n2itaKollast = !this.n2itaKollast;
    console.log(this.n2itaKollast);
  }

  onHiiregaPealeMinekul() {
    this.n2itaRohelist = true;
    console.log(this.n2itaRohelist);
  }

  onHiirega2raMinekul() {
    this.n2itaRohelist = false;
    console.log(this.n2itaRohelist)
  }

  hiiregaV2ljaKl6psates() {
    this.n2itaPunast = true;
    console.log(this.n2itaPunast);
    setInterval(() => {
      this.n2itaPunast = false;
      console.log(this.n2itaPunast);
    }, 2000);
  }

  klaviatuurilVajutades() {
    window.alert("Vajutasid klaviatuuril!");
  }

  klikkimisel() {
    this.s6na = this.s6na + 100;
    console.log(this.s6na)
  }

  klikkimiselJ2lle() {
    this.number = this.number + 100;
    console.log(this.number)
  }

  
}

