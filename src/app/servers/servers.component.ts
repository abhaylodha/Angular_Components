import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  // template: '<app-server></app-server><app-server></app-server>',
  // Above format with single quotes supports only single line code.
  // Use back ticks for multi line code.
  template: `<app-server></app-server>
            <app-server></app-server>`,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
