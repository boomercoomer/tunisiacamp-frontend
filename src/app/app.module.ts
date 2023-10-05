import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { AdminItemPanelComponent } from './components/admin-item-panel/admin-item-panel.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PasswordReminderPageComponent } from './components/password-reminder-page/password-reminder-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { WidgetComponent } from './components/widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SearchComponent,
    CartPageComponent,
    AdminItemPanelComponent,
    ArticlePageComponent,
    LoginPageComponent,
    PasswordReminderPageComponent,
    RegisterPageComponent,
    NavbarComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
