import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  private quote$: Observable<Object>;

  constructor(private quoteS: QuoteService) { 
  }

  ngOnInit() {
    this.quote$ = this.quoteS.getQuote();
    console.log(this.quoteS.getQuote());
  }
  getNewJoke(){
    this.quote$ = this.quoteS.getQuote();
  }

}
