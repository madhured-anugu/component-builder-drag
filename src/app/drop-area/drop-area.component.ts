import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DragDropInteractionService } from '../services/drag-drop-interaction.service';
import { DragModel } from '../model/dragModel';
import { FullTabComponent } from '../full-tab/full-tab.component';

@Component({
  selector: 'app-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.css']
})
export class DropAreaComponent implements OnInit {
  drag = '';
  drop = '';

  typeMap = {
    tabs: { component: FullTabComponent }
  };

  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  VCR: ViewContainerRef;

  componentsReferences = Array<ComponentRef<any>>();

  constructor(
    private interactionService: DragDropInteractionService,
    private CFR: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.interactionService.onDragComplete().subscribe((data: DragModel) => {
      this.drag = data.dragType;
      this.drop = data.dropType;
      this.createComponent();
    });
  }

  createComponent() {
    const type = this.drag;
    const obj = this.typeMap[type];
    if (!obj) {
      return;
    }

    let componentFactory = this.CFR.resolveComponentFactory(obj.component);

    let childComponentRef = this.VCR.createComponent(componentFactory);

    let childComponent = childComponentRef.instance;
    // add reference for newly created component
    this.componentsReferences.push(childComponentRef);
  }
}
