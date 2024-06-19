import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateOrUpdateLawyerDTO } from '@proxy/dto-s';
import { lawyerService } from '@proxy/lawyer';

@Component({
  selector: 'app-update-lawyer',
  templateUrl: './update-lawyer.component.html',
  styleUrl: './update-lawyer.component.scss'
})
export class UpdateLawyerComponent implements OnInit{
  newLawyer:CreateOrUpdateLawyerDTO={id:'' ,name:'' , position:'' , mobile:0 , address:'' } ;
  lawyerId:string='' 
  constructor(private _lawyerService:lawyerService , private _router:Router , private _activeRouter:ActivatedRoute){}
  ngOnInit(){
    this.lawyerId=this._activeRouter.snapshot.paramMap.get('id');
    this.getOneLawyer();
  }
  getOneLawyer(){
    this._lawyerService.get(this.lawyerId).subscribe((response:any)=>{
      this.newLawyer.id=this.lawyerId ;
      this.newLawyer.name=response.name ; 
      this.newLawyer.position=response.position ;
      this.newLawyer.mobile=response.mobile ; 
      this.newLawyer.address=response.address;
    })
  }

  updateLawyer(){
   this._lawyerService.update(this.lawyerId,this.newLawyer).subscribe((response)=>{
    this._router.navigateByUrl(`/lawyers`);
   })
  }
}
