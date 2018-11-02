import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-newvechile',
  templateUrl: './newvechile.component.html',
  styleUrls: ['./newvechile.component.css']
})
export class NewvechileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = new FormControl('');
}
