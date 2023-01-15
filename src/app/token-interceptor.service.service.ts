import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class TokenInterceptorServiceService implements HttpInterceptor {
	constructor() {}
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const loggedInUser = JSON.parse(localStorage.getItem("isSignedIn")!);
		const isApiUrl = req.url.startsWith(environment.baseurl);

		let token = loggedInUser?.access_token;
		console.log(token);

		const jwtToken = req.clone({
			setHeaders: {
				Authorization: "bearer " + token,
			},
		});
		return next.handle(jwtToken);
	}
}
