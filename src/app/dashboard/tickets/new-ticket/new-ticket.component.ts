import { Component, ElementRef, HostListener, Inject, ViewChild, viewChild } from '@angular/core';
import { AppButtonComponent } from '../../../shared/app-button/app-button.component';
import { InputControlComponent } from "../../../shared/input-control/input-control.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [AppButtonComponent, InputControlComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  constructor(@Inject(ElementRef) private el: ElementRef) {

  }
  onSubmit(title: string, request: string) {
    console.log(`Submitted data title :  ${title}, request : ${request}`);
  }

  @HostListener('click')
  onEleClick() {
    console.log(this.el);
  }

  @ViewChild("form") form?: ElementRef<HTMLFormElement>

  resetForm() {
    this.form?.nativeElement.reset();
  }

}
