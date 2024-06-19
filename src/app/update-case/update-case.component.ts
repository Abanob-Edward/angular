import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseService } from '@proxy/cases';
import { CreateOrUpdateCaseDto, LawyerDTO, LaywerListDto } from '@proxy/dto-s';
import { lawyerService } from '@proxy/lawyer';

@Component({
  selector: 'app-update-case',
  templateUrl: './update-case.component.html',
  styleUrl: './update-case.component.scss'
})
export class UpdateCaseComponent implements OnInit {
  newCase: CreateOrUpdateCaseDto = { id: '', number: 0, year: '', litigationDegree: '', finalVerdict: '', lawyerId: '' };
  caseId: string = '';
  lawyers: LawyerDTO[] = [];

  lawyerListDto: LaywerListDto = {
    filter: '',
    sorting: '',
    skipCount: 0,
    maxResultCount: 10
  };
  constructor(private _caseService: CaseService, private _lawyerService: lawyerService, private _router: Router, private _activeRouter: ActivatedRoute) { }
  ngOnInit() {
    this.caseId = this._activeRouter.snapshot.paramMap.get('id');
    this.getOneCase();
    this.getAllLawyers();
  }
  getAllLawyers(): void {
    this._lawyerService.getList(this.lawyerListDto).subscribe(
      (response: any) => {
        this.lawyers = response.items;
      }
    );
  }
  getOneCase() {
    this._caseService.get(this.caseId).subscribe((response: any) => {
      this.newCase.id = this.caseId;
      this.newCase.number = response.number;
      this.newCase.year = response.year;
      this.newCase.litigationDegree = response.litigationDegree;
      this.newCase.finalVerdict = response.finalVerdict;
      this.newCase.lawyerId = response.lawyerId
    })
  }

  updateCase() {
    this._caseService.update(this.caseId, this.newCase).subscribe((response) => {
      this._router.navigateByUrl(`/Cases`);
    })
  }
}
