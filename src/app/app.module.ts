import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxGalleryModule} from "ngx-gallery";
import { MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {HomeComponent} from "./home/home.component";
import { WelcomeComponent } from './welcome/welcome.component';
import {SidebarModule} from "ng-sidebar";
import { SummerComponent } from './summer/summer.component';
import { ContactComponent } from './contact/contact.component';
import { AmericanComponent } from './american/american.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    SummerComponent,
    ContactComponent,
    AmericanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
