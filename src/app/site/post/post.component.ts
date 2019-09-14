import { Component, OnInit } from '@angular/core';
import { Idata } from 'src/app/service/idata';
import { RestserviceService } from 'src/app/service/restservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  isSaved: boolean = false;
  userData: Idata;
  constructor(private restservice: RestserviceService,
    private router: Router) { }

  ngOnInit() {
  }

  addUser(formData: NgForm) {
    console.log("addUser" + formData.value);
    this.restservice.createUser(formData.value)
      .subscribe((resp:String) => {
        console.log('response :'+resp)
      })
      //this.router.navigateByUrl("/");
      window.location.replace("/");
  }
}
