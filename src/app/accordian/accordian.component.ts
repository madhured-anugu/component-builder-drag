import { Component, OnInit } from '@angular/core';
import { DynamicItem } from '../dynamic-item';
import { StackedComponent } from '../stacked/stacked.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  components: DynamicItem[];
  constructor() { }

  ngOnInit() {
    this.components = [
      {component: TabComponent, data: {'type': 'tabs', used: 2}},
      {component: StackedComponent, data: {'type': 'stacked', used: 4}},
    
    ]
  }

}