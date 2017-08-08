import { CounterService } from './counter-service.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    count = 1;
    constructor(private counterService: CounterService) {}

    onToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.logCounter(this.count);
    this.count++;
  }

    onToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.logCounter(this.count);
    this.count++;
  }
}
