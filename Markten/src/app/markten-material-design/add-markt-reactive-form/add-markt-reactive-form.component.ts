import { Component, OnInit } from '@angular/core';
import { Markten } from "../models/markten";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-markt-reactive-form',
  templateUrl: './add-markt-reactive-form.component.html',
  styleUrls: ['./add-markt-reactive-form.component.css']
})
export class AddMarktReactiveFormComponent implements OnInit {

  name: FormControl = this.fb.control("Ladies & Gents, We Got Him");

  marktenFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.marktenFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      locatie: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
    this.marktenFormGroup
      .valueChanges
      .subscribe(item =>
        console.log("Stream as from changes, ", item as Markten));
      this.name.valueChanges.subscribe(result => console.log(result));
  }

  submitHandler() {
    let markten = this.marktenFormGroup.value as Markten;
    console.log("Marken model object", markten);
  }

}
