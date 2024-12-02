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

  constructor(@Inject(ElementRef) private el: ElementRef) {

  }


  onSubmit(title: string, request: string) {
    console.log(`Submitted data title :  ${title}, request : ${request}`);
    this.addNewTicket.emit({id: Math.random(),request: request,title:title,status:'open'});
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
