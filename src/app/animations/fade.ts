import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
  animateChild,
} from '@angular/animations';

const resetRoute = [
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        position: 'fixed', // using absolute makes the scroll get stuck in the previous page's scroll position on the new page
        top: 0, // adjust this if you have a header so it factors in the height and not cause the router outlet to jump as it animates
        left: 0,
        width: '100%',
        opacity: 0,
      }),
    ],
    { optional: true }
  ),
];

// Fade Animation
// export const fadeInOut = trigger('fadeInOut', [
//   transition('* => *', [
//     ...resetRoute,
//     query(':enter', [style({ opacity: 0 })], {
//       optional: true,
//     }),
//     group([
//       query(
//         ':leave',
//         [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))],
//         { optional: true }
//       ),
//       query(
//         ':enter',
//         [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))],
//         { optional: true }
//       ),
//     ]),
//   ]),
// ]);

export const fadeInOut = trigger('routeAnimations', [
  // transition('HomePage <=> AboutPage', [
  //   style({ position: 'relative' }),
  //   query(
  //     ':enter, :leave',
  //     [
  //       style({
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         width: '100%',
  //       }),
  //     ],
  //     { optional: true }
  //   ),
  //   query(':enter', [style({ left: '-100%' })], { optional: true }),
  //   query(':leave', animateChild(), { optional: true }),
  //   group([
  //     query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
  //       optional: true,
  //     }),
  //     query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
  //       optional: true,
  //     }),
  //   ]),
  // ]),
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
        animate('500ms ease-in-out', style({ opacity: 1 })),
      ],
      { optional: true }
    ),
  ]),
]);
