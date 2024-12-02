import { Component, ElementRef, EventEmitter, HostListener, Inject, Output, ViewChild, viewChild } from '@angular/core';
import { AppButtonComponent } from '../../../shared/app-button/app-button.component';
import { InputControlComponent } from "../../../shared/input-control/input-control.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [AppButtonComponent, InputControlComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  @Output('new-ticket') addNewTicket = new EventEmitter<Ticket>();

  ticket: Ticket = { id: Math.random(), request: '', status: 'open', title: '' };

  constructor(@Inject(ElementRef) private el: ElementRef) {

  }


  onSubmit() {
    console.log(this.ticket);
    this.addNewTicket.emit({...this.ticket});
    this.resetForm();
  }

  // @HostListener('click')
  // onEleClick() {
  //   //console.log(this.el);
  // }

  @ViewChild("form") form?: ElementRef<HTMLFormElement>

  resetForm() {
    this.form?.nativeElement.reset();
  }

}
