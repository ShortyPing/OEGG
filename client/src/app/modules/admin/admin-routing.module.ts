import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminInitComponent} from "./admin-init/admin-init.component";
import {AdminLoginComponent} from "./auth/admin-login/admin-login.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AuthGuard} from "../../guards/auth.guard";
import {AdminNewsComponent} from "./admin-news/admin-news.component";
import {AdminNewsCreateComponent} from "./admin-news-create/admin-news-create.component";

const routes: Routes = [
  {
    path: "",
    component: AdminInitComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: AdminHomeComponent
      },
      {
        path: "news",
        component: AdminNewsComponent
      },
      {
        path: "news/create",
        component: AdminNewsCreateComponent
      }
    ]
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
