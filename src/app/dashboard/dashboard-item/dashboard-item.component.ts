import { Component, input, Input } from '@angular/core';
import { DitemHeaderComponent } from "../../ditem-header/ditem-header.component";

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [DitemHeaderComponent],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input({ required: true })
  description!: string;

  logo = input.required<string>();
}
