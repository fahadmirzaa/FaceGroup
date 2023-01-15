import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { UsersAuthenticationComponent } from "./users-autherization/users-authentication/users-authentication.component";
import { MatInputModule } from "@angular/material/input";
import { LoginComponent } from "./users-autherization/login/login.component";
import { SignUpComponent } from "./users-autherization/sign-up/sign-up.component";
import { ResetPasswordComponent } from "./users-autherization/reset-password/reset-password.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MainHomeLayoutComponent } from "./home/main-home-layout.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { TokenInterceptorServiceService } from "./token-interceptor.service.service";
@NgModule({
	declarations: [
		AppComponent,
		UsersAuthenticationComponent,
		LoginComponent,
		SignUpComponent,
		ResetPasswordComponent,
		MainHomeLayoutComponent,
		PageNotFoundComponent,
	],
	imports: [
		MatSliderModule,
		MatDialogModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		MatSnackBarModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatInputModule,
		MatCheckboxModule,
		MatTableModule,
		MatSidenavModule,
		MatIconModule,
		MatToolbarModule,
		MatCardModule,
		MatListModule,
		MatSelectModule,
		MatMenuModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatCardModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorServiceService,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
