import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavibarComponent } from './navibar/navibar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewmessageComponent } from './newmessage/newmessage.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { ChartexComponent } from './chartex/chartex.component';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavibarComponent,
    DashboardComponent,
    NewmessageComponent,
    NewtaskComponent,
    ChartexComponent,
    ContentComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
