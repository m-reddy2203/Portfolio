import { Component, OnInit } from '@angular/core';
import { QualificationsService } from '../qualifications.service';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent implements OnInit{
  qualisummary:any=[];
  quali:any=[];
  showdet=false;
  university:string="";
  startdate:number=0;
  enddate:number=0;
  showdeta=false;
  cgpa:number=0;
  selectedDetails:any="";
  selectedIndex:number=-1;
  in:number=-1;
constructor(public qualification:QualificationsService){
}
onhandle(index: number) {
  this.selectedIndex = index;
}
handlek(details: any,j:number) {
  this.selectedDetails = details;
  this.in=j;
}
ngOnInit(){

  this.quali=[
    {
      type:"Education", Details:[ { first: 'Graduation', university: 'GMU', startdate: 2022, enddate: 2023, cgpa: 3.5 },
      { first: 'Undergraduation', university: 'SNIST', startdate: 2022, enddate: 2023, cgpa: 3.5 },
      { first: 'Schooling', university: 'School Name', startdate: 2010, enddate: 2020, cgpa: 'NA' }]
    },
    {
      type:"WorkExperience", Details:[{first:'Nuronics lab',
      Description: 'GMU', startDate: 2022, endDate: 2023, Technologies:"Machine Learning" },
      {first:'TCS',Description:'TCS', startDate: 2022, endDate: 2023, Technologies: "Full stack"},
      {first:'GMU-TA',Description:'GMU', startDate: 2022, endDate: 2023, Technologies: "Fullstacck"}]
    },
  ];
 
}

  
}
