import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InstituteComponent } from './institute/institute.component';
import { LayoutComponent } from './layout/layout.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [ 
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'school', component : SearchComponent}, 
  {path:'college', component : SearchComponent}, 
  {path:'coaching', component : SearchComponent}, 
  {path:'home', component : LayoutComponent},
  {path:'schoolList', component: SchoolListComponent},
  {path:'institute', component: InstituteComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: '/home'}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
