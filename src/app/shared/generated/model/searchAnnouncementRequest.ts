/**
 * onecx-announcement-bff
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AnnouncementStatus } from './announcementStatus';
import { AnnouncementPriorityType } from './announcementPriorityType';
import { AnnouncementType } from './announcementType';


export interface SearchAnnouncementRequest { 
    creationDateFrom?: string;
    creationDateTo?: string;
    creationUser?: string;
    modificationDateFrom?: string;
    modificationDateTo?: string;
    modificationUser?: string;
    id?: string;
    title?: string;
    content?: string;
    type?: AnnouncementType;
    priority?: AnnouncementPriorityType;
    status?: AnnouncementStatus;
    startDateFrom?: string;
    startDateTo?: string;
    endDateFrom?: string;
    endDateTo?: string;
    appId?: string;
    /**
     * The number of page.
     */
    pageNumber?: number;
    /**
     * The size of page
     */
    pageSize?: number;
}


