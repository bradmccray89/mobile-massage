import { ChildrenOutletContexts } from '@angular/router';
import { Component } from '@angular/core';
import { fadeInOut } from 'src/app/animations/fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOut],
})
export class AppComponent {
  title = 'Mobile Massage of Raleigh';

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouterAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
