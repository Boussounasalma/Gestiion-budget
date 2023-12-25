import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CategorieComponent } from './categorie/categorie.component';
import { WalletComponent } from './wallet/wallet.component';
import { StatistiqueComponent } from './statistique/statistique.component';
const routes: Routes = [
{path:'',component: AuthentificationComponent},
{path:'Register',component: RegisterComponent},
{path:'dashboard',component: DashboardComponent},
{path:'transaction', component: TransactionComponent},
{path:'categories',component:CategorieComponent},
{path:'wallet',component:WalletComponent},
{path:'statistique',component:StatistiqueComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
