import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import interact from 'interactjs';
@Directive({
  selector: '[droppable]'
})
export class DroppableDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}
  ngAfterViewInit(): void {
    interact(this.element.nativeElement).dropzone({
      accept: '[draggable]',
      overlap: 0.75,
      ondropactivate: function(event) {
        const item = event.relatedTarget;
        item.classList.add('dragging');
      },
      ondropdeactivate: function(event) {
        const item = event.relatedTarget;
        item.classList.remove('dragging', 'cannot-drop');
      },
      ondragenter: function(event) {
        const item = event.relatedTarget;
        item.classList.remove('cannot-drop');
        item.classList.add('can-drop');
      },
      ondragleave: function(event) {
        const item = event.relatedTarget;
        item.classList.remove('can-drop');
        item.classList.add('cannot-drop');
      }
    });
    
  }

}