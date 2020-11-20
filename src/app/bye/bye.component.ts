import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html',
  styleUrls: ['./bye.component.scss']
})
export class ByeComponent implements OnInit {

  variable: String;
  n: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.variable = "Bonjour";
    this.n = this.variable.length;
  }

  compte($event) {
    console.log($event);
    this.n = this.variable.length;
  }
}
