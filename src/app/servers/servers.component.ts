import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName = 'Test-Server';
  serverCreated = false;

  constructor() {
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
  }
}
