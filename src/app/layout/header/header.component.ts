import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../service/site-data/site-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  appName = this.siteData.siteName;
  headerLogo = 'assets/icon/toy-truck-miniature-play_75_x_50.jpg';

  constructor(private siteData: SiteDataService) { }

  ngOnInit() {}

}
