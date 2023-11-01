import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-submitotp',
  templateUrl: './submitotp.component.html',
  styleUrls: ['./submitotp.component.scss'],

})
export class SubmitotpComponent implements OnInit {
  pinValue:number;
  code:number;
  originalDate:Date;
  currentDateTimee:Date;
  isLessThan30Seconds: boolean;
  private apiUrl = 'https://api.quickbase.com/v1/records/query';

  private apiUpdateUrl = 'https://api.quickbase.com/v1/records';

  constructor(private router:Router,private http: HttpClient) { }
 

  displayStyle = "none";
  dynamicText:string;
  openPopup() {
      this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
}

//for main 
displayStylee = "none";
dynamicTextt:string;

openPopupp() {
this.displayStylee = "block";
}

closePopupp() {
this.displayStylee = "none";
this.getRecordss();
}

//for main 
displayStyleee = "none";
dynamicTexttt:string;

openPopuppp() {
this.displayStyleee = "block";
}
closePopuppp() {
  this.displayStyleee = "none";
  this.router.navigateByUrl('/homenav');
}

  getRecords(): Observable<any> {
    const headers = new HttpHeaders({
      'QB-Realm-Hostname': 'smartersafeusa.quickbase.com',
      'Authorization': 'QB-USER-TOKEN b6jrap_qcvz_0_hsggci5b89xcdkz6ui6da4hbk5'
    });

    const body = {
  "from": "bss3saex3",
  "select": [
  3,
    23,25,
  
  ],
  "where": "{6.EX.'11111'}",
  "sortBy": [
    {
      "fieldId": 3,
      "order": "ASC"
    }
  ]
};

    return this.http.post<any>(this.apiUrl, body, { headers });
  }

  getRecordss(): void {
    this.getRecords().subscribe(
      data => {
        console.log(data);
        this.code=data.data[0]["23"].value;
        const currentDateTime = this.getCurrentDateTime();
        console.log("date....",currentDateTime); 
        console.log("23....",this.code); 
       const givenDateTime = currentDateTime.slice(0, 19);
      //  this.dynamicText = "Your safe 6-digit code is generated";
      //  this.openPopup();
      // alert('otp generated')
       this.originalDate = new Date(givenDateTime);
       console.log("cuuu..",this.originalDate)


      },
      error => {
        console.error(error);
      }
    );
  }

  getCurrentDateTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');
    const offsetHours = Math.floor(currentDate.getTimezoneOffset() / 60).toString().padStart(2, '0');
    const offsetMinutes = (currentDate.getTimezoneOffset() % 60).toString().padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${offsetHours}:${offsetMinutes}`;
    return formattedDate;
  }

  getupdatesRecords(): Observable<any> {
    const headers = new HttpHeaders({
      'QB-Realm-Hostname': 'smartersafeusa.quickbase.com',
      'Authorization': 'QB-USER-TOKEN b6jrap_qcvz_0_hsggci5b89xcdkz6ui6da4hbk5'
    });

    const currentDateTime = this.getCurrentDateTime();

    const body1 = {
      "to": "bss3saex3",

      "data": [{
      
          "3": {"value": "12"},
              "25": {"value": currentDateTime} 
      
      }]
};

    return this.http.post<any>(this.apiUpdateUrl, body1, { headers });
  }

  gotoTruckMain(){
    this.router.navigateByUrl('/truckmain');
//     if(this.pinValue!=null){
     
//     if(this.pinValue==this.code){
     
//     const currentDateTimee = new Date();
//     console.log("current...",currentDateTimee)

//     const timeDifference = currentDateTimee.getTime() - this.originalDate.getTime();
//     this.isLessThan30Seconds = timeDifference < 30000; // 30 seconds in milliseconds

//     console.log(this.isLessThan30Seconds);

//     if(this.isLessThan30Seconds){
    
//       this.getupdatesRecords().subscribe(
//         response => {
//           console.log("update",response);
//         },
//         error => {
//           console.error(error);
//         }
//       );
//     this.router.navigateByUrl('/truckmain');
//     }else{
//       this.dynamicTexttt = "Your 6-digit code validity got expired";
//       this.openPopuppp();
//       // alert('TimeOut');   
//     }
//   }
//   else{
//     this.dynamicText = "Please enter the valid OTP";
//     this.openPopup();
//   //  alert('Invalid Otp');
//   }

// }
//   else{
//     this.dynamicText = "Please enter the 6-digit code generated in mobile app";
//     this.openPopup();
//    // alert('Please enter the otp')
//   }
   }

  ngOnInit(): void {
    this.dynamicTextt = "To enter 6-digit code in Safe.";
    this.openPopupp();
  }

}
