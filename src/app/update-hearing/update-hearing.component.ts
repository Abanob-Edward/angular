import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseService } from '@proxy/cases';
import { CaseDTO, CaseListDTO, CreateOrUpdateHearingDTO } from '@proxy/dto-s';
import { HearingService } from '@proxy/hearings';

@Component({
  selector: 'app-update-hearing',
  templateUrl: './update-hearing.component.html',
  styleUrl: './update-hearing.component.scss'
})
export class UpdateHearingComponent  implements OnInit{
  newHearing:CreateOrUpdateHearingDTO={id:'' ,date:'' , decision:'' , caseId:'' } ;
  hearingId:string=''
  cases: CaseDTO[] = [];
  caseListDto: CaseListDTO = {
    filter: '', 
    sorting: '', 
    skipCount: 0, 
    maxResultCount: 10 
  };
  constructor(private _hearingService:HearingService,private _caseService:CaseService, private _router:Router , private _activeRouter:ActivatedRoute){}

  ngOnInit(): void {
    this.hearingId=this._activeRouter.snapshot.paramMap.get('id');
    this.getAllCases();
    this.getOneHearings();
  }
  getOneHearings(){
    this._hearingService.get(this.hearingId).subscribe((response:any)=>{
      this.newHearing.id=this.hearingId ; 
      this.newHearing.date=response.date ; 
      this.newHearing.decision=response.decision ; 
      this.newHearing.caseId=response.caseId;
    })
  }
  
  getAllCases(): void {
    this._caseService.getList(this.caseListDto).subscribe(
      (response: any) => {
        this.cases = response.items; 
      }
    );
  }
  updateHearing(){
    this._hearingService.update(this.hearingId,this.newHearing).subscribe((response)=>{
      this._router.navigateByUrl(`/Hearings`);
    })
  }
}
