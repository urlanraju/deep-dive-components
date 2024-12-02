import { Component } from '@angular/core';
import { DitemHeaderComponent } from '../../ditem-header/ditem-header.component';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket';
import { CommonModule } from '@angular/common';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DitemHeaderComponent, NewTicketComponent, CommonModule, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

  addNewTicket(ticket: Ticket) {
    this.tickets.push(ticket);
}

  tickets : Ticket[] = [];

  trackBy(index:number, item:Ticket) {
    console.log(index);
    return item.id;
 }
}
