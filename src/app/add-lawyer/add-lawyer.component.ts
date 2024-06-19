import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreateOrUpdateLawyerDTO, LawyerDTO } from '@proxy/dto-s';
import { lawyerService } from '@proxy/lawyer';

@Component({
  selector: 'app-add-lawyer',
  templateUrl: './add-lawyer.component.html',
  styleUrl: './add-lawyer.component.scss'
})
export class AddLawyerComponent {
newLawyer:CreateOrUpdateLawyerDTO={name:'' , position:'' , mobile:0 , address:'' } ;
constructor(private _lawyerService:lawyerService , private _router:Router){}
addNewLawyer(){
  this._lawyerService.create(this.newLawyer).subscribe((response)=>{
    this._router.navigateByUrl(`/lawyers`);
  })
}
}
