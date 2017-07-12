import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
 
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { SecureComponent } from "./components/secure/secure.component";
import {detailsComponent} from './components/details/details.component';
import {listComponent} from './components/list/list.component';
 
const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "secure", component: SecureComponent },
    { path: "list", component: listComponent},
    { path: "details", component: detailsComponent}
];
 
export const navigatableComponents = [
  listComponent,
  detailsComponent
 
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }