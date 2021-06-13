import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from './component/layout/admin-layout/admin-layout.component';
import {UserLayoutComponent} from './component/layout/user-layout/user-layout.component';
import {AuthLayoutComponent} from './component/layout/auth-layout/auth-layout.component';
import {BlankLayoutComponent} from './component/layout/blank-layout/blank-layout.component';
const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent
  }, 
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: 'notes',
        loadChildren: () => import ('./view/notes/notes.module').then(m => m.NotesModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () => import ('./view/posts/posts.module').then(m => m.PostsModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
