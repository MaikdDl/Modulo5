
// duda // import { HttpClient } from "selenium-webdriver/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  login({ email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account/login`, {
      email,
      password
    });
  }

  register({ fullName, email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account/register`, {
      fullName,
      email,
      password
    });
  }
}
