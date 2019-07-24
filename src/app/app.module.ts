import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CommentsComponent } from './comments/comments.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HTTPErrorComponent } from './httperror/httperror.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const appRoutes: Routes = [
  { path: 'books', canActivate:[AuthGuardService], component: BookListComponent },
  { path: 'books/:id', canActivate:[AuthGuardService], component: BookDetailComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'shopping-cart',canActivate:[AuthGuardService], component: ShoppingCartComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: '**', component: HTTPErrorComponent, data: {code: 404, message: 'Not Found'} }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CommentsComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    HTTPErrorComponent,
    AuthComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
