import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseService } from '@proxy/cases';
import { CaseDTO, CaseListDTO, CreateOrUpdateHearingDTO } from '@proxy/dto-s';
import { HearingService } from '@proxy/hearings';

@Component({
  selector: 'app-add-hearing',
  templateUrl: './add-hearing.component.html',
  styleUrl: './add-hearing.component.scss'
})
export class AddHearingComponent  implements OnInit{
  newHearing:CreateOrUpdateHearingDTO={date:'' , decision:'' , caseId:'' } ;
  cases: CaseDTO[] = [];
  
  caseListDto: CaseListDTO = {
    filter: '', 
    sorting: '', 
    skipCount: 0, 
    maxResultCount: 10 
  };
  ngOnInit(): void {
    this.getAllCases();
  }
  
  getAllCases(): void {
    this._caseService.getList(this.caseListDto).subscribe(
      (response: any) => {
        this.cases = response.items; 
      }
    );
  }
  constructor(private _hearingService:HearingService,private _caseService:CaseService, private _router:Router){}
  addNewHearing(){
    this._hearingService.create(this.newHearing).subscribe((response)=>{
      this._router.navigateByUrl(`/Hearings`);
    })
  }
}
