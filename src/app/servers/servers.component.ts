import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  templateUrl: './servers.component.html',

  // template: '<app-server></app-server><app-server></app-server>',
  // Above format with single quotes supports only single line code.
  // Use back ticks for multi line code.
  //template: `<app-server></app-server>
  //          <app-server></app-server>`,

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = "";

  constructor() {
    setTimeout(
      () => {
        this.allowNewServer = true;
      }, 2000);

  }

  ngOnInit() { }

  onCreateServer() {
    this.serverCreationStatus = "Server was created.";
  }

  onUpdateServerEvent(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }
}
