import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsersDataService } from "src/app/services/users-data.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
enum SnackBarMessages {
	INVALID_CREDENTIALS = "Email or Password is wrong",
}

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	constructor(
		private userService: UsersDataService,
		private router: Router,
		private snackbar: MatSnackBar
	) {}
	public signInFormGroup: FormGroup = new FormGroup({
		emailFormControl: new FormControl("", [Validators.required]),
		passwordFormControl: new FormControl("", [Validators.required]),
	});

	get emailFormControl(): FormControl {
		return this.signInFormGroup.get("emailFormControl") as FormControl;
	}
	get passwordFormControl(): FormControl {
		return this.signInFormGroup.get("passwordFormControl") as FormControl;
	}

	ngOnInit(): void {}

	signIn() {
		const credentials = {
			email: this.emailFormControl.value,
			password: this.passwordFormControl.value,
		};
		console.log("is clicked");

		this.userService.signIn(credentials).subscribe(
			(res: any) => {
				localStorage.setItem("isSignedIn", JSON.stringify(res));
				this.router.navigate(["home"]);
			},
			(error) => {
				this.snackbar.open(SnackBarMessages.INVALID_CREDENTIALS, "", {
					duration: 2000,
				});
			}
		);
	}
}
