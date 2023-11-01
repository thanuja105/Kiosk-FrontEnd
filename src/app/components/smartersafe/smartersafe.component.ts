import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/services/Service';

@Component({
  selector: 'app-smartersafe',
  templateUrl: './smartersafe.component.html',
  styleUrls: ['./smartersafe.component.scss']
})
export class SmartersafeComponent implements OnInit {

 
  constructor(private router: Router,  private service:Service) { }

  ngOnInit(): void {
    // Wait for 10 seconds and then navigate to the home window
    setTimeout(() => {
      this.router.navigate(['/homenav']);
    }, 10000); // 10 seconds (10000 milliseconds)

    this.localdata();

    
  }

  public localdata(){
    this.service.remote_local().subscribe(data=>{

  });
  }

}
