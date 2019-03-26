import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PostResponse } from "../dashboard.models";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  getWall(): Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(`${environment.apiBaseUrl}/user/wall`);
  }
}
