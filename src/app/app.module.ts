import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { StackedComponent } from './stacked/stacked.component';
import { AccordianComponent } from './accordian/accordian.component';
import { DynamicCompDirective } from './dynamic-comp.directive';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ToolContentComponent } from './tool-content/tool-content.component';
import { ToolHeaderComponent } from './tool-header/tool-header.component';
import { DraggableDirective } from './draggable.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TabComponent,
    StackedComponent,
    AccordianComponent,
    DynamicCompDirective,
    DynamicComponent,
    ToolContentComponent,
    ToolHeaderComponent,
    DraggableDirective
  ],
  bootstrap: [AppComponent],
  providers: [ ]
})
export class AppModule {}
