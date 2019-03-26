import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MailValidator } from "../../validators/mail.validator";
import { Store } from '@ngxs/store';
import { Login } from "../../store/auth.actions";

@Component({
  selector: 'sn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, MailValidator]],
    password: ['', [Validators.required]]
  },
    { updateOn: 'blur' }  // Con esto hacemos que actualice el campo cuando salimos de él
  );

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      //Llamada de red
      this.store.dispatch(new Login(this.loginForm.value));
    }
  }
}


