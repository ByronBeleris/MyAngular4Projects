import { PostService } from './posts/post.service';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    PostsModule
  ],
  providers: [ AuthService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
