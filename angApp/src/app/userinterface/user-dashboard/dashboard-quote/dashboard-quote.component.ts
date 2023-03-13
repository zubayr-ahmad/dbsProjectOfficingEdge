import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-quote',
  templateUrl: './dashboard-quote.component.html',
  styleUrls: ['./dashboard-quote.component.css']
})
export class DashboardQuoteComponent implements OnInit{
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.getQuote()
  }
  getRandomNumber(total:number): number {
    return Math.floor(Math.random() * total-1); // generates a random number
  }
  quoteoftheDay:any;
  length:number = 100;

  getQuote(){
    
    this.http.get(`https://type.fit/api/quotes`).subscribe((result:any)=>{
      this.length = result.length
      let index = this.getRandomNumber(this.length)
      this.quoteoftheDay = result[index].text;
      console.log(this.quoteoftheDay)
    })
  }
  
}
