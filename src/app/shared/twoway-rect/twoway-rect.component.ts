import { Component } from '@angular/core';
import { InputControlComponent } from "../input-control/input-control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway-rect',
  standalone: true,
  imports: [InputControlComponent,FormsModule],
  templateUrl: './twoway-rect.component.html',
  styleUrl: './twoway-rect.component.css'
})
export class TwowayRectComponent {
onHeightIncrease() {
  this.style.height +=5;
}
  style = {width : 100,height:100,background:'blue'} 

  onWidthIncrease(){
    this.style.width +=5;
  }
}
