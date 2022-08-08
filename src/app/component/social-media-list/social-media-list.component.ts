import { Component, OnInit } from '@angular/core';
import { Socialmedia } from 'Socialmedia';
import { SocialmediaService } from 'src/app/services/socialmedia.service';
@Component({
  selector: 'app-social-media-list',
  templateUrl: './social-media-list.component.html',
  styleUrls: ['./social-media-list.component.scss']
})
export class SocialMediaListComponent implements OnInit {
  socialmediainfo!:Socialmedia[];
  constructor(private socialmediaservices : SocialmediaService) { }

  ngOnInit(): void {
    this.socialmediaservices.getSocialInfo().subscribe((value) => this.socialmediainfo = value)
  }

}
