import { Pipe, PipeTransform } from '@angular/core';
import {BackendService} from "../services/backend/backend.service";

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  constructor(private backendService: BackendService) {
  }

  transform(value: string, ...args: unknown[]): Promise<string> {
    return new Promise(resolve => {
      this.backendService.getUsername(value).subscribe({
        next: (val) => resolve(val["username"]),
        error: () => resolve("Nicht gefunden")
      })
    });
  }

}
