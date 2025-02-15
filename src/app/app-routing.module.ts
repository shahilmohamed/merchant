import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'signup',component:SignUpComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent,canActivate:[AuthGuard]
  },
  {
    path:'details/:id', component:DetailsComponent,canActivate:[AuthGuard]
  },
  {
    path:'addprod', component:AddProductComponent,canActivate:[AuthGuard]
  },
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
