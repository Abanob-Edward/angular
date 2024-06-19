import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CaseDTO {
  number: number;
  year?: string;
  litigationDegree?: string;
  finalVerdict?: string;
  lawyerName?: string;
}

export interface CaseListDTO extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface CreateOrUpdateCaseDto {
  number: number;
  year: string;
  litigationDegree: string;
  finalVerdict: string;
  lawyerId: string;
}

export interface CreateOrUpdateHearingDTO {
  date: string;
  decision: string;
  caseId: string;
}

export interface CreateOrUpdateLawyerDTO {
  name: string;
  position: string;
  mobile: number;
  address: string;
}

export interface HearingDto {
  date?: string;
  decision?: string;
}

export interface HearingListDTO extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface LawyerDTO extends EntityDto<string> {
  name?: string;
  position: string;
  mobile: number;
  address: string;
}

export interface LaywerListDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}
