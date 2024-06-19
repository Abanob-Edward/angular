import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseService } from '@proxy/cases';
import { CreateOrUpdateCaseDto, LawyerDTO, LaywerListDto } from '@proxy/dto-s';
import { lawyerService } from '@proxy/lawyer';

@Component({
  selector: 'app-add-case',
  templateUrl: './add-case.component.html',
  styleUrl: './add-case.component.scss'
})
export class AddCaseComponent implements OnInit{
newCase:CreateOrUpdateCaseDto={number:0 , litigationDegree:'' ,year:'' , finalVerdict:'' , lawyerId:'' } ;
lawyers: LawyerDTO[] = [];

lawyerListDto: LaywerListDto = {
  filter: '', 
  sorting: '', 
  skipCount: 0, 
  maxResultCount: 10 
};
ngOnInit(): void {
  this.getAllLawyers();
}

getAllLawyers(): void {
  this._lawyerService.getList(this.lawyerListDto).subscribe(
    (response: any) => {
      this.lawyers = response.items; 
    }
  );
}
constructor(private _caseService:CaseService,private _lawyerService:lawyerService , private _router:Router){}
addNewCase(){
  this._caseService.create(this.newCase).subscribe((response)=>{
    this._router.navigateByUrl(`/Cases`);
  })
}
}
