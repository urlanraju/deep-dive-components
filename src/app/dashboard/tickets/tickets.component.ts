import { Component } from '@angular/core';
import { DitemHeaderComponent } from '../../ditem-header/ditem-header.component';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DitemHeaderComponent, NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
