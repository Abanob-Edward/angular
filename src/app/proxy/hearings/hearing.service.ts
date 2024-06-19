import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateOrUpdateHearingDTO, HearingDto, HearingListDTO } from '../dto-s/models';

@Injectable({
  providedIn: 'root',
})
export class HearingService {
  apiName = 'default';
  

  create = (input: CreateOrUpdateHearingDTO, config?: Partial<Rest.Config>) =>
    this.restService.request<any, HearingDto>({
      method: 'POST',
      url: '/api/app/hearing',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, HearingDto>({
      method: 'GET',
      url: `/api/app/hearing/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: HearingListDTO, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<HearingDto>>({
      method: 'GET',
      url: '/getHearingList',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  hardDelete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/hard_Delete',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  softDelete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/Soft_Delete',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateOrUpdateHearingDTO, config?: Partial<Rest.Config>) =>
    this.restService.request<any, HearingDto>({
      method: 'PUT',
      url: `/api/app/hearing/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
