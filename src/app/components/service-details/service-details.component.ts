import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent implements OnInit {
  @Input() service: any;

  constructor() {}

  ngOnInit(): void {}

  selectService() {
    console.log('selected service');
  }
}
