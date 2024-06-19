import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HearingDto, HearingListDTO } from '@proxy/dto-s';
import { HearingService } from '@proxy/hearings';

@Component({
  selector: 'app-hearing',
  templateUrl: './hearing.component.html',
  styleUrl: './hearing.component.scss'
})
export class HearingComponent implements OnInit{
  
  hearings: HearingDto[] = [];
 
   hearingListDto: HearingListDTO = {
     filter: '', 
     sorting: '', 
     skipCount: 0, 
     maxResultCount: 10 
   };
 constructor(private _hearingService:HearingService , private _router:Router){}
   ngOnInit() {
     this.getAllHearings();
   }
   getAllHearings(){
     this._hearingService.getList(this.hearingListDto).subscribe((response:any)=>{
       this.hearings=response.items 
     })
   }
   updateHearing(id:string){
     this._router.navigateByUrl(`/updateHearing/${id}`)
    }
    deleteHearing(id:string){
      this._hearingService.softDelete(id).subscribe((response)=>{
        this._router.navigateByUrl(`/Hearings`);
        this.ngOnInit();
      })
  
    }
}
