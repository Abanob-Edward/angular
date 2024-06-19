import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateOrUpdateLawyerDTO, LawyerDTO, LaywerListDto } from '../dto-s/models';

@Injectable({
  providedIn: 'root',
})
export class lawyerService {
  apiName = 'Default';
  

  create = (input: CreateOrUpdateLawyerDTO, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LawyerDTO>({
      method: 'POST',
      url: '/api/app/lawyer',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, LawyerDTO>({
      method: 'GET',
      url: `/api/app/lawyer/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: LaywerListDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<LawyerDTO>>({
      method: 'GET',
      url: '/getlawyerList',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  h_Delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/HDelete',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  s_Delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/SDelete',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateOrUpdateLawyerDTO, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/lawyer/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
