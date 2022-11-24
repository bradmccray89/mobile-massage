import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js/min';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(phoneValue: number | string, countryCode: string = 'US'): any {
    try {
      const phoneNumber = parsePhoneNumber(
        phoneValue + '',
        countryCode as CountryCode
      );
      return phoneNumber.formatNational();
    } catch (error) {
      return phoneValue;
    }
  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  phoneNumber = '5555555555';

  constructor() {}

  ngOnInit(): void {}
}
