import { Component, OnInit } from '@angular/core';
import { RestserviceService } from 'src/app/service/restservice.service';
import { Idata } from 'src/app/service/idata';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  id: number;
  bookDetail: Idata;
  editableData: Idata;
  statusMsg: string;
  isSaved: boolean = false;
  constructor(private restservice: RestserviceService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.getUsersDetails();
  }
  getUsersDetails() {
    this.restservice.getUserById(this.id)
      .subscribe((resp: Idata) => {
        this.bookDetail = resp;
      });
  }
  launchEditModal() {
    console.log('launchEditModal');
    //to make bootstrap modal work thru jquery
    this.editableData = JSON.parse(JSON.stringify(this.bookDetail)); //duplicate obj

    $('#editModal').modal('show');
    console.log(this.editableData.bookId);
  }
  updateProgram() {
    console.log(this.editableData);
    this.restservice.update(this.editableData)
      .subscribe((resp: Idata) => {  //2. receive resp from service 
        console.log(resp);
        // if status is success 
        //if(resp){
        this.statusMsg = "Thanks! Saved successfully.";
        this.isSaved = true;
        setTimeout(() => {
          $('#editModal').modal('hide');
          this.bookDetail = resp;
          //this.getPgmData();
          //#1 page refresh
        }, 3000);

        //}

      })


  }
}
