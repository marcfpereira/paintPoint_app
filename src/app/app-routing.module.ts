import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./view/home-component/home-component";
import {PageNotFoundComponent} from "./view/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: "full"
  },
  {path: 'home', component: HomeComponent},
  {
    path: 'employees',
    loadChildren: () => import('../../src/app/view/employees/employees.module').then(module => module.EmployeesModule)
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
