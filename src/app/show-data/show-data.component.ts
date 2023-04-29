import { Component, OnInit } from '@angular/core';
import { ShowDataService } from '../show-data.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit{
  ngOnInit(): void {
  }
  dataarr!:any
constructor(private data:ShowDataService){
}
 hello(){
  this.data.getdata().subscribe(boj=>{this.dataarr=boj
    console.log(this.dataarr);
    });
}
pt(){
 this.data.postdata().subscribe(dt=>console.log(dt)); 
this.hello()
}
}
