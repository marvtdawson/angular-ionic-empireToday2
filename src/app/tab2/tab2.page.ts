import { Component } from '@angular/core';
import {DriverArrivalPage} from '../driver-arrival/driver-arrival.page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    pushConfirmDriverArrival = DriverArrivalPage;
    pageTitle = 'Logistics';

    constructor(private router: Router) {
    }

    onConfirmDriverArrival() {
        this.router.navigate(['driver-arrival']);
    }

    onConfirmTrailerDrop() {
        this.router.navigate(['trailer-arrival']);
    }

    onAddNewDriver() {
        this.router.navigate(['new-driver']);
    }

}
