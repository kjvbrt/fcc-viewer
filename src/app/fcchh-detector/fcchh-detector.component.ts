import { Component, OnInit } from '@angular/core';
import { EventDisplayService } from 'phoenix-ui-components';
import { Configuration, PhoenixLoader, PresetView, PhoenixMenuNode } from 'phoenix-event-display';

@Component({
  selector: 'app-fcchh-detector',
  templateUrl: './fcchh-detector.component.html',
  styleUrls: ['./fcchh-detector.component.scss']
})
export class FcchhDetectorComponent implements OnInit {

  phoenixMenuRoot = new PhoenixMenuNode("Phoenix Menu");

  constructor(private eventDisplay: EventDisplayService) { }

  ngOnInit(): void {
    const configuration: Configuration = {
      eventDataLoader: new PhoenixLoader(),
      presetViews: [
        new PresetView('Left View', [0, 0, -12000], 'left-cube'),
        new PresetView('Center View', [-500, 12000, 0], 'top-cube'),
        new PresetView('Right View', [0, 0, 12000], 'right-cube')
      ],
      defaultView: [4000, 0, 4000],
      phoenixMenuRoot: this.phoenixMenuRoot,
      /*defaultEventFile: {
        eventFile: 'assets/jive_xml_event_data.xml',
        eventType: 'jivexml'
      },*/
    }

    this.eventDisplay.init(configuration);

    this.eventDisplay.loadGLTFGeometry('assets/fcchh-geo.gltf', 'Detector');
  }

}
