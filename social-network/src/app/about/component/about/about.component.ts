import { Component } from '@angular/core';



@Component({
  selector: 'sn-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  title = "Ola a todos!!";
  subtitle = "O meu nome é Miguel";
  description = "Son un desarrollador de frontend e encántame crear bonitas páxinas web. Podes atopar máis información sobre min nos seguintes enlaces:";

  links = [
    { url: 'http://linkedin.com/in/migueldiazleal', name: 'LinkedIn' },
    { url: 'http://github.com/MaikdDl', name: 'Github' },
    { url: 'http://www.google.com', name: 'Google' },

  ];

  contact = {
    description: 'Se queres contactar comigo, podes enviarme un correo a:',
    mail: 'maikdl@gmail.com'
  };
}