import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseService } from '@proxy/cases';
import { CaseDTO, CaseListDTO } from '@proxy/dto-s';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrl: './case.component.scss'
})
export class CaseComponent implements OnInit{
  
 cases: CaseDTO[] = [];

  caseListDto: CaseListDTO = {
    filter: '', 
    sorting: '', 
    skipCount: 0, 
    maxResultCount: 10 
  };
constructor(private _caseService:CaseService , private _router:Router){}
  ngOnInit() {
    this.getAllCases();
  }
  getAllCases(){
    this._caseService.getList(this.caseListDto).subscribe((response:any)=>{
      this.cases=response.items 
    })
  }
  updateCase(id:string){
    this._router.navigateByUrl(`/updateCase/${id}`)
   }
   deleteCase(id:string){
     this._caseService.s_Delete(id).subscribe((response)=>{
       this._router.navigateByUrl(`/Cases`);
       this.ngOnInit();
     })
 
   }
}
