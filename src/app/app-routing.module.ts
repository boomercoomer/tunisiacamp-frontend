import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { PasswordReminderPageComponent } from './components/password-reminder-page/password-reminder-page.component';
import { AdminItemPanelComponent } from './components/admin-item-panel/admin-item-panel.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'forgotPass', component: PasswordReminderPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'admin', component: AdminItemPanelComponent },
  { path: 'search/:searchTerm', component: BodyComponent },
  { path: 'category/:category', component: BodyComponent },
  { path: 'article/:id', component: ArticlePageComponent },
  { path: 'cart', component: CartPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
