import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../dashboard.models";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getWall(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiBaseUrl}/user/wall`);
  }
}
