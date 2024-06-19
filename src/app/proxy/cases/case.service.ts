import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CaseDTO, CaseListDTO, CreateOrUpdateCaseDto } from '../dto-s/models';

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  apiName = 'Default';
  

  create = (input: CreateOrUpdateCaseDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CaseDTO>({
      method: 'POST',
      url: '/api/app/case',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CaseDTO>({
      method: 'GET',
      url: `/api/app/case/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: CaseListDTO, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CaseDTO>>({
      method: 'GET',
      url: '/getCaseList',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  h_Delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/hardDelete',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  s_Delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/SoftDelete',
      params: { id },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateOrUpdateCaseDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/app/case/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
