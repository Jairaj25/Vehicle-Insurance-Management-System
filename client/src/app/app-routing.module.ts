import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuypolicyComponent } from './buypolicy/buypolicy.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { ViewclaimsComponent } from './viewclaims/viewclaims.component';
import { ClaimComponent } from './claim/claim.component';
import { PaymentComponent } from './payment/payment.component';
import { FogpassComponent } from './fogpass/fogpass.component';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';
import { AgentviewpolicyComponent } from './agentviewpolicy/agentviewpolicy.component';
import { AgentviewcustComponent } from './agentviewcust/agentviewcust.component';
import { AgentviewclaimsComponent } from './agentviewclaims/agentviewclaims.component';
import { AgentloginComponent } from './agentlogin/agentlogin.component';
const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path:'home',component: HomeComponent},
{path:'userlogin',component: UserloginComponent},
{path:'agentlogin',component: AgentloginComponent},
{path:'register',component: RegisterComponent},
{path:'buypolicy',component: BuypolicyComponent},
{path:'dashboard',component: DashboardComponent},
{path:'fogpass',component: FogpassComponent},
{path:'agentdashboard',component: AgentdashboardComponent},
{path:'agentviewpolicy',component: AgentviewpolicyComponent},
{path:'agentviewcust',component: AgentviewcustComponent},
{path:'agentviewclaims',component: AgentviewclaimsComponent},
{path:'viewpolicy',component: ViewpolicyComponent},
{path:'viewclaims',component: ViewclaimsComponent},
{path:'claim',component: ClaimComponent},
{path:'payment',component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
