import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-header',
  templateUrl: './tool-header.component.html',
  styleUrls: ['./tool-header.component.css']
})
export class ToolHeaderComponent implements OnInit {

  @Input() toolType: string = 'Tool';
  constructor() { }

  ngOnInit() {
  }

}