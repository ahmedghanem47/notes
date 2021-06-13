import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteslistComponent } from './noteslist/noteslist.component';

const routes: Routes = [
  {
    path: '',
    component: NoteslistComponent 
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
