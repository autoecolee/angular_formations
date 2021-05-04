import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { AccordionComponent } from '@syncfusion/ej2-angular-navigations';
import { ExpandEventArgs, Accordion, AccordionClickArgs} from '@syncfusion/ej2-navigations';
import { Programme } from 'src/app/models/programme';
import { ProgrammeService } from 'src/app/services/programme.service';
  @Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
 
})
export class FormationsComponent implements OnInit {
   
  private itemCount: number = 1;
  
  programmes : Programme[]=new Array<Programme>();
  formations:any;
  programmeID:any;

   constructor(  private router:Router,private programmeService:ProgrammeService,private route:ActivatedRoute) {
    this.programmeID= this.route.snapshot.paramMap.get('programmeID');
    console.log(this.programmeID);
 }
   

  
  ngOnInit(){
  

   
     
      this.programmeService.getProgrammes()
           .subscribe(
             (programmes:Programme[])=> 
              { console.log(programmes);
                this.programmes=programmes}
              );
      
      
    
     this.formations=[{
      "id":11,
      "titre":"Programme IC Canada",
      "sousProg":[{
      "id" :1,
      "titre":"Hancho",
      "cours":[
        {
          "id":1,
          "titre":"introduction"
        },
        {
          "id":2,
          "titre":"cours 1"
        }
      ]
    },
  {
    "id":2,
    "titre":"BSC",
    "cours":[]
  },{
    "id":3,
    "titre":"BPR",
    "cours":[]
  }]
  
  }
    ];
  }
   
  Ajouter(){
     this.router.navigate(['programmes/add']);
 }
  
}
