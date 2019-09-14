import { Component, OnInit } from '@angular/core';
import { RestserviceService } from 'src/app/service/restservice.service';
import { Idata } from 'src/app/service/idata';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  constructor(private restservice:RestserviceService,
    private router: Router) { 
    console.log('inside constructor home componenet')
  }
  bookData:Array<Idata>;
  delUser : Idata;

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.restservice.getUserList()
    .subscribe( (resp:Idata[]) => { 
        this.bookData = resp;
      });
      
    }
    deleteUser(delUser){
     console.log('iside delete'+delUser);
      this.restservice.deleteUser(delUser)
      .subscribe();     
      window.location.reload();
    }
    
}
