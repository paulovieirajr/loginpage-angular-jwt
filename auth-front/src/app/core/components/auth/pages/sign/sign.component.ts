import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  public isLoginValid: boolean = true;
  public messageError: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.formAuth.valid) {
      this.authService
      .sign({
        email: this.formAuth.value.email,
        password: this.formAuth.value.password,
      })
      .subscribe({
        next: (data) => data,
        error: (err) => {
          this.messageError = err;
          this.isLoginValid = false;
        }
      })
    }
  }
}
