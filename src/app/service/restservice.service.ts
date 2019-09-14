import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Idata } from './idata';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { debug } from 'util';



@Injectable({
  providedIn: 'root'
})

export class RestserviceService {
  constructor(private http: HttpClient) { }

  

  getUserList() {
    console.log('inside get List All');
    
    return this.http.get("http://localhost:8080/SpringRestful_Assingment1/api/books");
  }
  getUserById(id){
    console.log(`getUserById by Id ${id}`);   
    return this.http.get(`http://localhost:8080/SpringRestful_Assingment1/api/book/${id}`);          
  }
  createUser(addUser){
    console.log(addUser);
    //2. send the data to rest api 
    return this.http.post("http://localhost:8080/SpringRestful_Assingment1/api/book/post", addUser);                    
  }
  deleteUser(id){
    console.log('delUser '+id);
    //2. send the data to rest api 
    return this.http.delete(`http://localhost:8080/SpringRestful_Assingment1/api/book/${id}`);                   
  }
  update(editableData){
    console.log(editableData);
    //2. send the data to rest api 
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${editableData.id}`, editableData)
            .pipe(map( (resp ) =>{ //3. receive resp from rest api 
              console.log(resp);
              return resp; //4. send the resp back to comp 
            }));
  }
}