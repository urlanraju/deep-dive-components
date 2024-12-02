import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {

@Output('on-ticket-close') onTicketClose  = new EventEmitter<number>();

  ngOnInit(): void {
    
  }
  
  @Input("ticket") ticket! : Ticket;

  onComplete(){
    this.ticket.status = 'closed';
    this.onTicketClose.emit(this.ticket.id);
  }
}
