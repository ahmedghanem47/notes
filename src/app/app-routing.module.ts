import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from './component/layout/admin-layout/admin-layout.component';
import {UserLayoutComponent} from './component/layout/user-layout/user-layout.component';
import {AuthLayoutComponent} from './component/layout/auth-layout/auth-layout.component';
import {BlankLayoutComponent} from './component/layout/blank-layout/blank-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent
  }, 
  {
    path: 'user',
    component: UserLayoutComponent
  },
  {
    path: 'auth',
    component: AuthLayoutComponent
  },
  {
    path: 'blank',
    component: BlankLayoutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
