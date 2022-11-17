import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.components.html',
})
export class CardComponent {
  @Input() title = '';
}
