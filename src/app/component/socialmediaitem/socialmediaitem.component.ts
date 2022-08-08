import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Socialmedia } from 'Socialmedia';
import {faFacebookSquare , faTwitter , faInstagramSquare , faYoutubeSquare} from '@fortawesome/free-brands-svg-icons'
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-socialmediaitem',
  templateUrl: './socialmediaitem.component.html',
  styleUrls: ['./socialmediaitem.component.scss']
})
export class SocialmediaitemComponent implements OnInit {
  showDarkMode: boolean = false;
  subscript!: Subscription;
  @Input() socialinfo! :Socialmedia;
  
socialIcons:any = {
    faFacebookSquare : faFacebookSquare,
    faTwitter : faTwitter,
    faInstagramSquare : faInstagramSquare,
    faYoutubeSquare : faYoutubeSquare
  }

  constructor(private uiServices: UiService) {
    this.subscript = this.uiServices.onToggle().subscribe((value) => this.showDarkMode = value)
  }

  ngOnInit(): void {
  }

}
