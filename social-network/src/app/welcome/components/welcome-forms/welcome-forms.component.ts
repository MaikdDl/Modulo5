import { Component } from '@angular/core';

@Component({
  selector: 'sn-welcome-forms',
  templateUrl: './welcome-forms.component.html',
  styleUrls: ['./welcome-forms.component.scss']
})
export class WelcomeFormsComponent {

  isRegisterFormVisible = true;

  toggleForm($event) {
    this.isRegisterFormVisible = !this.isRegisterFormVisible;
  }

}
