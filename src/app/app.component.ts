import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allBooks:any=[];
  constructor(private api:ApiService){}
  title = 'bookstore-user';
  ngOnInit(): void {
    this.getAllListedBooks()
  }
  getAllListedBooks(){
    this.api.getAllBooksApi().subscribe({
      next:(res:any)=>{
        console.log("ALL BOOKS")
        console.log(res)
        this.allBooks=res;
      },
      error:(res:any)=>{
        console.log(res)
      }
    })
  }
}
