import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AgentloginComponent } from './agentlogin/agentlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { BuypolicyComponent } from './buypolicy/buypolicy.component';
import { RegisterComponent } from './register/register.component';
import { FogpassComponent } from './fogpass/fogpass.component';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';
import { AgentviewpolicyComponent } from './agentviewpolicy/agentviewpolicy.component';
import { AgentviewcustComponent } from './agentviewcust/agentviewcust.component';
import { AgentviewclaimsComponent } from './agentviewclaims/agentviewclaims.component';
import { ViewclaimsComponent } from './viewclaims/viewclaims.component';
import { ClaimComponent } from './claim/claim.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserloginComponent,
    AgentloginComponent,
    DashboardComponent,
    ViewpolicyComponent,
    BuypolicyComponent,
    RegisterComponent,
    FogpassComponent,
    AgentdashboardComponent,
    AgentviewpolicyComponent,
    AgentviewcustComponent,
    AgentviewclaimsComponent,
    ViewclaimsComponent,
    ClaimComponent,
    PaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
