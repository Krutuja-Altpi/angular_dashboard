import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UiService {
  private showDarkMode: boolean = false;
  private subject = new Subject<any>();
  constructor() { }

  toggleDarkMode(): void {
    this.showDarkMode = !this.showDarkMode;
    this.subject.next(this.showDarkMode)
    // console.log(this.showDarkMode + " from service");
  }
  
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
