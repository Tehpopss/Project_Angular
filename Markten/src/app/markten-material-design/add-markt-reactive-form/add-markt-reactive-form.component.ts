import { Component, OnInit } from '@angular/core';
import { Markten } from "../models/markten";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MarktenDataService } from "src/app/app-http-calls/markten-data.service";

@Component({
  selector: 'app-add-markt-reactive-form',
  templateUrl: './add-markt-reactive-form.component.html',
  styleUrls: ['./add-markt-reactive-form.component.css']
})
export class AddMarktReactiveFormComponent implements OnInit {

  marktForm = new FormGroup({
    name: new FormControl(''),
    locatie: new FormControl(''),
  });

  constructor(private marktHttp: MarktenDataService, private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.marktForm = this.fb.group({
      name:[""],
      locatie:[""]
    })
  }

  submitHandler() {
    console.log(this.marktForm.value);
    this.marktHttp
    .postMarkten(this.marktForm.value)
    .subscribe(data => console.log(data));
  }

}
