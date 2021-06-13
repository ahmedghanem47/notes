import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminLayoutComponent} from './layout/admin-layout/admin-layout.component';
import {UserLayoutComponent} from './layout/user-layout/user-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    BlankLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
