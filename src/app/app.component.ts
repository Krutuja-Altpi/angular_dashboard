import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  showDarkMode: boolean = false;
  subscript!: Subscription;

  constructor(private uiService: UiService) {
    this.subscript = this.uiService.onToggle().subscribe((value) => this.showDarkMode = value);
    console.log(this.showDarkMode);
  };

}
