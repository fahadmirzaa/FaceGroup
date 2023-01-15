import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UsersDataService } from "../services/users-data.service";

@Component({
	selector: "app-main-home-layout",
	templateUrl: "./main-home-layout.component.html",
	styleUrls: ["./main-home-layout.component.css"],
})
export class MainHomeLayoutComponent implements OnInit {
	postMessage(_t113: NgForm) {
		throw new Error("Method not implemented.");
	}
	menu: any;
	user: any;
	isLoading?: boolean = false;
	images: any;
	posts: any;
	constructor(
		public router: Router,
		public usersDataService: UsersDataService
	) {}
	events: string[] = [];
	opened: boolean = false;
	logout() {
		localStorage.clear();
		this.router.navigate(["/auth"]);
	}

	ngOnInit(): void {}
}
