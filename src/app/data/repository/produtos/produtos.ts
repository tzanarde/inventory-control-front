import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ProdutosMapper } from './produtos-mapper';
import { environment } from 'src/environments/environment';
import { map, flatMap } from 'rxjs/operators';
import { DriverEntity } from '../../../domain/entities/driver-entity';
import { IMotoristaRepository } from 'src/app/domain/interfaces/repository/imotorista-repository';

@Injectable({
  providedIn: 'root'
})
export class MotoristaRepositoryService implements IMotoristaRepository {

  private mapper = new ProdutosMapper();

  constructor(private http: HttpClient) { }

  get(id?: number): Observable<DriverEntity> {
    if (id) {
      return this.http
        .get<DriverEntity>(environment.server + '/products')
        .pipe(map((item) => {
          if (item[0]) {
            return this.mapper.mapFrom(item[0]);
          }

          return null;
        }));
    } else {
      return this.http
        .get<DriverEntity[]>(environment.server + '/products')
        .pipe(flatMap((item) => item))
        .pipe(map(this.mapper.mapFrom));
    }
  }
  insert(param: DriverEntity): Observable<DriverEntity> {
    return this.http
      .post<DriverEntity>(environment.server + '/products', param)
      .pipe(map(this.mapper.mapFrom));
  }
  update(param: DriverEntity): Observable<DriverEntity> {
    return this.http
      .put<DriverEntity>(environment.server + '/products/' + param.id, param)
      .pipe(map(this.mapper.mapFrom));
  }
  disableEnable(id: number, status: boolean): Observable<DriverEntity> {
    return this.http
      .patch<DriverEntity>(environment.server + '/products/' + id, { enable: status })
      .pipe(map(this.mapper.mapFrom));
  }

}
