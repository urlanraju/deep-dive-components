import { Component, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input-control',
  standalone: true,
  imports: [],
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.css',
  encapsulation: ViewEncapsulation.None
})
export class InputControlComponent {
  label = input.required<string>();

  @ContentChild("input") content? : ElementRef<any>;
}
