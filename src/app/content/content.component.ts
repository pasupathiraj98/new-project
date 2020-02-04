import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

items=[

{
	message:1000,
	background:" bg-success"
},
{
	message:2000,
	background:" bg-danger"
},

{
	message:3000,
	background:"bg-warning"
},

{
	message:4000,
	background:" bg-primary"
}




]

addingobject(){
	this.items.push({
		message:5000,
		background:"bg-success"
		})
}

}
