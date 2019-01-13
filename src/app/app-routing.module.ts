import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SummerComponent} from "./summer/summer.component";
import {ContactComponent} from "./contact/contact.component";
import {AmericanComponent} from "./american/american.component";

const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'summer', component: SummerComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'american', component: AmericanComponent},
  {path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
