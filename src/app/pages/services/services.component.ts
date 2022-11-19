import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  serviceList = [
    {
      id: 1,
      title: 'Swedish',
      description:
        'Swedish massage is a very calm and relaxing luxury massage, with this modality you can reduce stress and focus on stiff and strained muscles. This also helps boost immune function by flushing out lymph.',
    },
    {
      id: 2,
      title: 'Deep Tissue',
      description:
        'Deep Tissue focuses on more in depth work, using techniques such as broadening and lengthening, theses techniques help assist postural realignment and pain mangement to help relieve strained and locked muscles.',
    },
    {
      id: 3,
      title: 'Sports Therapy',
      description:
        'This modality is not only for the athlete, but more in between swedish and deep tissue when it comes to pressure. The techniques here help teach proper body mechanics using active and passive engagement for a healthier muscle state. It can also reduce recovery time after a workout.',
    },
    {
      id: 4,
      title: 'Foot Reflexology',
      description:
        'This of course focuses on the feet for a complete relaxation massage, using different variations of pressure and techniques, it has been shown to promote self-healing in other aspects of the body as well.',
    },
    {
      id: 5,
      title: 'Trigger Point',
      description:
        'A trigger point is a hyper irritable spot in one muscle that can cause immense pain and reffer to a differnt location on the body. With proper techniques this pain can be relieved and have a huge impact on the body and wellness.',
    },
    {
      id: 6,
      title: 'NeuroMuscular Therapy (NMT)',
      description:
        'Neuromuscular is a very in depth therapy that utilizes static pressure and trigger point to help adjust postural alignment and treat trigger points to help affect both muscle and skeletal systems in the body for proper body mechanics.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
