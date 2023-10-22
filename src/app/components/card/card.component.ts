import { Component, Input} from '@angular/core';
import { database } from 'src/app/data/database';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  data:any
}
