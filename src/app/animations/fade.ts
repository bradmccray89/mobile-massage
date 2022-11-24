import {
  trigger,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';

export const fadeInOut = trigger('routeAnimations', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0 })], {
      optional: true,
    }),
    query(
      ':leave',
      [
        style({ opacity: 1 }),
        animate('500ms ease-in-out', style({ opacity: 0 })),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('500ms 200ms ease-in-out', style({ opacity: 1 })),
      ],
      { optional: true }
    ),
  ]),
]);
