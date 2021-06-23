import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import interact from 'interactjs';
@Directive({
  selector: '[draggable]'
})
export class DraggableDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}
  ngAfterViewInit(): void {
    const elem = this.element.nativeElement;
    debugger;
    interact(elem).draggable({
      // enable inertial throwing
      inertia: true,
      // restrict: {
      //   restriction: '',
      //   endOnly: true,
      //   elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      // },

      // enable autoScroll
      autoScroll: true,

      listeners: {
        // call this function on every dragmove event
        move: event => {
          var target = event.target;
          // keep the dragged position in the data-x/data-y attributes
          var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
          var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          // translate the element
          target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

          // update the posiion attributes
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        },

        // call this function on every dragend event
        end(event) {
          const canDrop = event.target.classList.contains('can-drop');
          if (!canDrop) {
            event.target.remove();
          }
        }
      }
    });
  }
}
