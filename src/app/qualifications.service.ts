import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QualificationsService {

  constructor() { }
  getacademics():any{
    let getacademics=[
      {type:"Education"},
      {type:"Work Experience"},
      {type:"Certifications"}
    ]
  }
}
