import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/Service';

@Component({
  selector: 'app-employeemaintenance',
  templateUrl: './employeemaintenance.component.html',
  styleUrls: ['./employeemaintenance.component.scss']
})
export class EmployeemaintenanceComponent implements OnInit {

  constructor(private router: Router, private service: Service,public fb: FormBuilder) { }

  registrationForm = this.fb.group({

  });

  get myForm() {
    return this.registrationForm.get("flexRadioDefault");
  }

  days:number;

  ngOnInit(): void {
  }

  changeDays(totalDays: number) { 
    this.days = totalDays;
  }

  basedOnDaysDeleteRecord(){
   
    this.service.basedOnDays(this.days).subscribe(data=>{
    
    });

  }
}
