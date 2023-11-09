import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreInfoRequest } from 'src/app/config/Model';
import { Service } from 'src/app/services/Service';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-truckmain',
  templateUrl: './truckmain.component.html',
  styleUrls: ['./truckmain.component.scss']
})
export class TruckmainComponent implements OnInit {

  store = new StoreInfoRequest();
  
  stores: StoreInfoRequest[];
  selectedStore = new StoreInfoRequest();
  storeName: string | null;


  constructor(private router:Router, private ipcService: IpcService,private service:Service) { }

  displayStyle = "none";
    dynamicText:string;
    popupid:string = "raise_request";
    
    openPopup() {
      this.displayStyle = "block";
    }
    

  gotoChangeTruckConfirmRequest()
    {
      
      this.router.navigateByUrl('/changetruckconfirmrequest');
    }
    gotoDoorsexe()
    {
     // this.storeName=localStorage.getItem("storeName");
     // console.log("--------storename---------"+localStorage.getItem("storeName"));
      this.dynamicText ="Do You Want To Open the Vault Door.";
      this.openPopup();
      this.popupid = "raise_request";
      // this.router.navigateByUrl('/doorsexe');
      // this.ipcService.send("openvalutlocker");
    }

  ngOnInit(): void {
  }

  closePopup() {
    this.displayStyle = "none";
    if(this.dynamicText=="Do You Want To Open the Vault Door."){
      this.storeName=localStorage.getItem("storeName");
      console.log("--------storename in closepopup---------"+localStorage.getItem("storeName"));
      this.service.withdrawreport(this.storeName).subscribe(data=>{
      });
      this.router.navigateByUrl('/doorsexe');
    }
  }

}
