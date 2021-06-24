import { Component, VERSION } from '@angular/core';
import { DragModel } from './model/dragModel';
import { DragDropInteractionService } from './services/drag-drop-interaction.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item = {
    type: 'tabs'
  };
  drag = '';
  drop = '';
  constructor(private interactionService: DragDropInteractionService) {
    this.interactionService.onDragComplete().subscribe((data: DragModel) => {
      this.drag = data.dragType;
      this.drop = data.dropType;
    });
  }
}
