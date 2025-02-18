import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddProductComponent } from '../add-product/add-product.component';
import { DetailsComponent } from '../details/details.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from '../shared/material.module';
import { AuthGuard } from '../auth.guard';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    DetailsComponent,
    AddProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgxPaginationModule
  ],
  providers: [AuthGuard],
})
export class DashboardModule {}
