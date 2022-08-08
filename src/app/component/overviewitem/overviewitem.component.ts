import { Component, Input, OnInit } from '@angular/core';
import { Overview } from 'Overview';
import { SocialIcons } from 'src/Socialicons';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-overviewitem',
  templateUrl: './overviewitem.component.html',
  styleUrls: ['./overviewitem.component.scss']
})
export class OverviewitemComponent implements OnInit {
  showDarkMode: boolean = false;
  subscript!: Subscription;
 @Input() overviewItem! : Overview;
 socialIcons = SocialIcons;
 constructor(private uiServices: UiService) {
  this.subscript = this.uiServices.onToggle().subscribe((value) => this.showDarkMode = value)
}

  ngOnInit(): void {
  }

}
