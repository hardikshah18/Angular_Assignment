import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html'
})
export class FormComponent {
  feedbackForm!: FormGroup; 

  constructor(private fb: FormBuilder) {
    // ✅ Initialize after fb is available
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      alert('Feedback submitted:\n' + JSON.stringify(this.feedbackForm.value, null, 2));
      this.feedbackForm.reset();
    }
  }
}
