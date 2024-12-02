import { Component, Input } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  
  @Input("ticket") ticket! : Ticket;
}
