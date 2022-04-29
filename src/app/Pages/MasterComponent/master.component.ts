import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  params : any = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  

  ngOnInit(): void {
   this.route.queryParams.subscribe(
      (params) => {
        console.log(params.location)
        if(params.location == undefined){
          this.router.navigate(['/portal'], { queryParams: { location: 'null'}});
        }
        else{
          this.params = params.location;
        }
        
      }
    );
  ;


  }

  

}
