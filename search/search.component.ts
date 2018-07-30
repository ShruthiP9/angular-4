import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { LoginComponent } from '../twoservice/login.service';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
peoples = [];
eventObj;


  constructor(private route:ActivatedRoute,private _pService:UserService,private _Service:LoginComponent ) {
  console.log("search constructor");
   }

  ngOnInit() {
    console.log("search ngOnInit");
    this._pService.getUsers().subscribe(resPeopleData =>this.peoples= resPeopleData);
    this.route.paramMap
    .subscribe(params=>{
       
      let eveName=params.get('ename');
      console.log("eveName",eveName);
      this.eventObj=this._Service.matchData(eveName);
    
    })
   
  }

}
