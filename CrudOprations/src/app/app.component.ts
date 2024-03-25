import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      aadhar: ['', Validators.required],
      pan: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      
      console.log(this.myForm.value);
      
      if (this.selectedFile) {
        console.log('Selected File:', this.selectedFile.name);
      }
    }
  }

  resetForm() {
    this.myForm.reset(); 
    this.selectedFile = null; 
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; 
  }
}
