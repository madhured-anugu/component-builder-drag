import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic]'
})
export class DynamicCompDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
