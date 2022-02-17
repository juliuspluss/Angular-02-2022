import { Component } from '@angular/core';

@Component({ //imporditakse node_modules seest ja saab kõik componendile vajalikud omadused
  selector: 'app-root', //võtan selectori abil componendi kasutusele <app-ostukorv></app-ostukorv>
  templateUrl: './app.component.html', //siit seotakse HTML fail, mida on iga kord täpselt 1, ka mitut .ts faili ei saa htmli siduda; alati on 1=1 seos.
  styleUrls: ['./app.component.css'] //siit seotakse CSS fail, mida võib ka olla mitu tk
})
export class AppComponent { //et oleks võimalik importida
  title = 'veebipood';
}

// [] - tähistavad massiivi-listi-array
// {} - tähistavad objekti- võti-väärtus paaride kogumik või funktsiooni/classi algust ja lõppu
// () - parameetrite vastu võtmiseks, kui seda välja kutsun, siis annan midagi kaasa
// class - tähistab funktsioonide ja muutujate kogumit
// OstukorvComponent - tekib genereerides (ng generate component ostukorv)
// implements OnInIt - OnInIT on imporditud node-modules kaustast ja annab mingit lisaomadust
// et ei saaks kustutada ega muuta ngOnInIt funktsiooni
// constructor - erinvate koodilõikude ühendamiseks node_module kaustast
//kui luuakse component, siis ühendatakse mingid teatud failid mis on siia sisse pandud
// loomise moment on kui URL peale satutakse 
// ngOnInIt - käimaminemise funktsioon
// käimaminemise moment on kui URL peale satutakse
// funktsioon, mis on loogelisest sulust loogeliseni
// näen kust algab ja lõppeb kui vajutan ühe loogelise sulu peale ja tekib mõlema ümber kast
// kõikidele sulutüüpidele on vaja programmeerimises paarilist
