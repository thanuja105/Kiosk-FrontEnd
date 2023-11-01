import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpcService } from 'src/app/services/ipc.service';

@Component({
  selector: 'app-truckmain',
  templateUrl: './truckmain.component.html',
  styleUrls: ['./truckmain.component.scss']
})
export class TruckmainComponent implements OnInit {

  constructor(private router:Router, private ipcService: IpcService) { }

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
      this.router.navigateByUrl('/doorsexe');
    }
  }

}
