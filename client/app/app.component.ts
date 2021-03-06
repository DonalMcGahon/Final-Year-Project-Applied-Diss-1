import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MlabsService } from "./services/mlabs.service";
import { Profile } from "./DataModals/profile.model";
import { AuthService } from './services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [MlabsService]
})

export class AppComponent { 

  profile: Profile[] = [];
  word:string;
  constructor(private router: Router, private mlabsService: MlabsService, private authService: AuthService){}


  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/'])
  }

  goToSearch(search:string){
    console.log(search);
    this.word = search;
    this.router.navigateByUrl(`/search?word=${this.word}`)

  }

      // Functions to return what is in storage
      get user(): any {
        return JSON.parse(localStorage.getItem('user'));
      }
}

