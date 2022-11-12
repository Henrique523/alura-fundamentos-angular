import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: [],
})
export class PhotoComponent {
  @Input() description = '';
  @Input() url = '';
}
