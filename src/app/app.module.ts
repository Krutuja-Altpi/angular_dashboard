import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialMediaListComponent } from './component/social-media-list/social-media-list.component';
import { SocialmediaitemComponent } from './component/socialmediaitem/socialmediaitem.component';
import { OverviewComponent } from './component/overview/overview.component';
import { OverviewitemComponent } from './component/overviewitem/overviewitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialMediaListComponent,
    SocialmediaitemComponent,
    OverviewComponent,
    OverviewitemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
