import { Component, OnInit } from '@angular/core';
import { Overview } from 'Overview';
import { OverviewServiceService } from 'src/app/services/overview-service.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  overviewList!:Overview[]
  constructor(private overviewService:OverviewServiceService) { }

  ngOnInit(): void {
    this.overviewService.getOverviewInfo().subscribe((value)=> this.overviewList = value)
  }

}
