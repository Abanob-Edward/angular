import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LawyerDTO, LaywerListDto } from '@proxy/dto-s/models';
import { lawyerService } from '@proxy/lawyer';

@Component({
  selector: 'app-lawyer',
  templateUrl: './lawyer.component.html',
  styleUrl: './lawyer.component.scss'
})
export class LawyerComponent implements OnInit{

  lawyers: LawyerDTO[] = [];

  lawyerListDto: LaywerListDto = {
    filter: '', 
    sorting: '', 
    skipCount: 0, 
    maxResultCount: 10 
  };

  constructor(private lawyerService: lawyerService , private _router:Router) { }

  ngOnInit(): void {
    this.getAllLawyers();
  }

  getAllLawyers(): void {
    this.lawyerService.getList(this.lawyerListDto).subscribe(
      (response: any) => {
        this.lawyers = response.items; 
      }
    );
  }
  updateLawyer(id:string){
   this._router.navigateByUrl(`/updateLawyer/${id}`)
  }
  deleteLawyer(id:string){
    this.lawyerService.s_Delete(id).subscribe((response)=>{
      this._router.navigateByUrl(`/lawyers`);
      this.ngOnInit();
    })

  }
}

