import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthorityGroup } from '../models/authority-group';

@Injectable()
export class AuthorityGroupService {

  private AUTHORITY_GROUP_RESOURCE = "http://192.168.99.1:5000/api/authority-groups";

  constructor(private httpClient: HttpClient) { }

  public getAuthorityGroups(): Observable<AuthorityGroup[]> {
    return this.httpClient.get<AuthorityGroup[]>(this.AUTHORITY_GROUP_RESOURCE);
  }

  public getAuthorityGroupById(id: number): Observable<AuthorityGroup> {
    return this.httpClient.get<AuthorityGroup>(this.AUTHORITY_GROUP_RESOURCE + `/${id}`);
  }

  public createAuthorityGroup(authorityGroup: AuthorityGroup): Observable<AuthorityGroup> {
    return this.httpClient.post<AuthorityGroup>(this.AUTHORITY_GROUP_RESOURCE, JSON.stringify(authorityGroup));
  }

  public updateAuthorityGroup(authorityGroup: AuthorityGroup): Observable<AuthorityGroup> {
    return this.httpClient.put<AuthorityGroup>(this.AUTHORITY_GROUP_RESOURCE, JSON.stringify(authorityGroup));
  }

  public deleteAuthorityGroup(id: number): Observable<number> {
    return this.httpClient.delete<number>(this.AUTHORITY_GROUP_RESOURCE + `/${id}`);
  }

}