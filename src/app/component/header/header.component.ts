import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDarkMode: boolean = false;
  subscription!: Subscription

  constructor(private uiServices: UiService) {
    this.subscription = this.uiServices.onToggle().subscribe((value) => this.showDarkMode = value)
  }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this.uiServices.toggleDarkMode()
  }
}
