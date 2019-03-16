import { Component, OnInit } from '@angular/core';
import { faSearch, faUsers, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sn-welcome-hero',
  templateUrl: './welcome-hero.component.html',
  styleUrls: ['./welcome-hero.component.scss']
})
export class WelcomeHeroComponent {

  rows = [
    { id: 1, icon: faSearch, message: "Atopa xente coma tí" },
    { id: 2, icon: faUsers, message: "Crea a túa rede de amigos" },
    { id: 3, icon: faComments, message: "Mantén o contacto" }
  ]

}
