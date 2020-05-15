import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {
  siteName = 'Load Tracker';
  siteFooterName = 'Load Tracker LLC';
  siteTagLine = 'Trailer 2 Trailer Tracking';
  siteKeywords = 'Load Tracker, Load Tracker App, Logistics, Trucking, Trucks, Truck, ' +
      'Lite, Load, Lite Truck Load, Tracking, Track, Locator, App, Geo Location';
  year: number = new Date().getFullYear();
  siteLogo = '../assets/shapes.svg';
  // value_proposition_header = 'Capture Data Build Perception Increase Profits';
  // value_proposition_header = 'Capture Data Build Perception Increase Profits';
  // value_proposition_footer = 'Capture Data -> Build Perception -> Increase Profits';

  constructor() { }
}
