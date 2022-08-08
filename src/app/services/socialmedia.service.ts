import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Socialmedia } from 'Socialmedia';
@Injectable({
  providedIn: 'root'
})
export class SocialmediaService {
  private ApiUrl = "https://socialmedia-29cb6-default-rtdb.firebaseio.com/socialMedia.json";
  constructor(private http : HttpClient) { }

  getSocialInfo():Observable<Socialmedia[]>{
      return this.http.get<Socialmedia[]>(this.ApiUrl)
  }
}
