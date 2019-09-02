import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}

  onCycleCountCarpet() {
    this.router.navigate(['carpet']);
  }

  onCycleCountHardSurface() {
    this.router.navigate(['hard-surface']);
  }

  onCycleCountSupplies() {
    this.router.navigate(['supplies']);
  }

  onCycleCountSamples() {
    this.router.navigate(['samples']);
  }

}
