import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  myForm: FormGroup;

  get fc(){
    return this.myForm.controls;
    }
  constructor(private fb : FormBuilder){
    this.myForm = this.fb.group({
      firstName:new FormControl('', Validators.required),     
      email: ['', [Validators.required, Validators.email]],
      number: new FormControl ('', [Validators.required, Validators.maxLength(12),Validators.minLength(5)]), 
      subject:new FormControl('', Validators.required),

    });
  }

  
  ngOnInit(): void {
  }

}
