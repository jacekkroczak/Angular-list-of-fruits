import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  // createFruit(title: string) {
  //  return this.webReqService.post('fruits', {title});
  // }
}
