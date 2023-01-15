import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from 'src/app/user';
import {UsersDataService} from '../../services/users-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})

export class SignUpComponent implements OnInit {
  constructor(private usersDataService: UsersDataService) {
  }

  public signupFormGroup: FormGroup = new FormGroup({
    nameFormControl: new FormControl('', [Validators.required]),
    usernameFormControl: new FormControl('', [Validators.required]),
    emailFormControl: new FormControl('', [Validators.required]),
    passwordFormControl: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  get nameFormControl(): FormControl {
    return this.signupFormGroup.get('nameFormControl') as FormControl;
  }

  get usernameFormControl(): FormControl {
    return this.signupFormGroup.get('usernameFormControl') as FormControl;
  }

  get emailFormControl(): FormControl {
    return this.signupFormGroup.get('emailFormControl') as FormControl;
  }

  get passwordFormControl(): FormControl {
    return this.signupFormGroup.get('passwordFormControl') as FormControl;
  }

  onSignup() {
    localStorage.getItem('user');
    const user: User = {
      id: 0,
      name: this.nameFormControl.value,
      username: this.usernameFormControl.value,
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value,
      Image: './assets/elon.jpg',
    };

    this.usersDataService.addUsers(user).subscribe();
  }
}
