import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavsComponent } from './navs/navs.component';
import { BodyFullComponent } from './body-full/body-full.component';
import { FooterNoFixedComponent } from './footer-no-fixed/footer-no-fixed.component';
import { DividerComponent } from './divider/divider.component';
import { MovieComponent } from './movie/movie.component';
@NgModule({
  declarations: [
    AppComponent,
    NavsComponent,
    BodyFullComponent,
    FooterNoFixedComponent,
    DividerComponent,
    MovieComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
