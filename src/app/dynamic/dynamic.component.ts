import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { CompInterface } from '../comp-interface';
import { DynamicCompDirective } from '../dynamic-comp.directive';
import { DynamicItem } from '../dynamic-item';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent {
  @Input() item: DynamicItem;

  // @ViewChild(DynamicCompDirective, {static: true}) dynamicHost!: DynamicCompDirective;

  // constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  // ngOnInit() {
  //   this.loadComponent();
  // }

  // loadComponent(){

  //   const item =  this.item;
  //   const compFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
  //   const viewContainerRef = this.dynamicHost.viewContainerRef;
  //   viewContainerRef.clear();
  //   const componentRef = viewContainerRef.createComponent<CompInterface>(compFactory);
  //   componentRef.instance.data = item.data;

  // }
}
