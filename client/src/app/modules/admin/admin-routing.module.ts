import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminInitComponent} from "./admin-init/admin-init.component";
import {AdminLoginComponent} from "./auth/admin-login/admin-login.component";

const routes: Routes = [
  {
    path: "",
    component: AdminInitComponent
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        component: AdminLoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
