import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-ditem-header',
  standalone: true,
  imports: [],
  templateUrl: './ditem-header.component.html',
  styleUrl: './ditem-header.component.css'
})
export class DitemHeaderComponent {

  @Input({ required: true })
  description!: string;

  logo = input.required<string>();

}
