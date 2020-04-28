import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name = "syrine" ;
  imageUrl = "assets/images/node.jpg";

  constructor() { }

  ngOnInit(): void {

  }

  hello(myname : String){
    alert("hello " + myname)
  }

}
