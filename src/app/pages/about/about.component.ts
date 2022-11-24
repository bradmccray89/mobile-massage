import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/animations/fade';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInOut],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
