import { Component, OnDestroy, OnInit } from '@angular/core';
import { DitemHeaderComponent } from "../../ditem-header/ditem-header.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DitemHeaderComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit,OnDestroy{

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.currentStatus = 'status-unknown';
  }
  currentStatus = 'status-online';

  statusClasses = ['status-online', 'status-offline', 'status-unknown']
  refreshStatus() {
    let index = Math.floor(Math.random() * 3);
    this.currentStatus = this.statusClasses[index];
  }
}
