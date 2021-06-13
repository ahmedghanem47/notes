import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostslistComponent } from './postslist/postslist.component';

const routes: Routes = [
  {
    path: '',
    component:  PostslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
