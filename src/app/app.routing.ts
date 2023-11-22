import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent }  // Elimina pathMatch o asigna otro valor válido si es necesario
];

export const routing = RouterModule.forRoot(appRoutes);
