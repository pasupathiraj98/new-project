import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-newmessage',
  templateUrl: './newmessage.component.html',
  styleUrls: ['./newmessage.component.css']
})
export class NewmessageComponent implements OnInit {
@Input() message;
@Input() color;
@Input() bar;

  constructor() { }

  ngOnInit() {
  }

}
