import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Overview } from 'Overview';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OverviewServiceService {
  private ApiUrl = "https://socialmedia-29cb6-default-rtdb.firebaseio.com/overviewInfo.json"
  constructor(private http : HttpClient) { }
  getOverviewInfo():Observable<Overview[]>{
    return this.http.get<Overview[]>(this.ApiUrl)
  }
}
