import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "./login.guard";
import { UsersAuthenticationComponent as AuthLayoutComponent } from "./users-autherization/users-authentication/users-authentication.component";
import { MainHomeLayoutComponent } from "./home/main-home-layout.component";
import { AuthGuard } from "./auth/auth.guard";
RouterModule.forRoot([], { enableTracing: true });
const routes: Routes = [
	{
		path: "auth",
		component: AuthLayoutComponent,
		canActivate: [LoginGuard],
		loadChildren: () =>
			import(
				"./users-autherization/authentication/authentication.module"
			).then((u) => u.AuthenticationModule),
	},
	{ path: "", pathMatch: "full", redirectTo: "auth" },
	{
		path: "home",
		component: MainHomeLayoutComponent,
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
