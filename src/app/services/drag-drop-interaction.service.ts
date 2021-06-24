import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DragModel } from '../model/dragModel';

@Injectable({ providedIn: 'root' })
export class DragDropInteractionService {
  private dragComplete = new Subject<DragModel>();
  constructor() {}

  sendDragComplete(data: DragModel) {
    this.dragComplete.next(data);
  }

  onDragComplete(): Observable<any> {
    return this.dragComplete.asObservable();
  }
}
