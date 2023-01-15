import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/user";
import { environment } from "../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class UsersDataService {
	constructor(private http: HttpClient) {}
	url = environment.baseurl;

	addUsers(user: User) {
		return this.http.post(this.url + "/auth/register", user);
	}
	Onclick(user: any) {
		return this.http.post(this.url + "/home", user);
	}

	signIn(user: { email: string; password: string }) {
		return this.http.post(this.url + "/auth/login", user);
	}
}
