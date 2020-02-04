import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
   {
   path:"",
   component:ContentComponent,
   },

   {
   path:"table",
   component:TableComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
