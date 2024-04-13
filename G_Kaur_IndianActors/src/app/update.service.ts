/* import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate) { }

  checkForUpdates(): void {
    this.swUpdate.available.subscribe(event => {
      const snackbar = document.createElement('snackbar');
      snackbar.innerHTML = `
        Update available.
        <button>Reload</button>
      `;
      document.body.appendChild(snackbar);
      snackbar.querySelector('button').addEventListener('click', () => {
        this.activateUpdate();
      });
    });
  }

  private activateUpdate(): void {
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }
}
 */

import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate) { }

  checkForUpdates(): void {
    // Check for updates when the service starts
    this.checkForUpdate();

    // Long poll for updates every half hour
    interval(30 * 60 * 1000).subscribe(() => {
      this.checkForUpdate();
    });
  }

  private checkForUpdate(): void {
    this.swUpdate.checkForUpdate().then(() => {
      console.log('Checking for updates...');
    });
  }

  private activateUpdate(): void {
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }
}
