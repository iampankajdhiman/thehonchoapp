import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-res-signup',
  templateUrl: './signup.html',

})

export class AppResSignUp implements OnInit {

    status = 'Register';

    segmentChanged(ev: any) {
        if (ev.detail.value === 'Login') {
            this.status = 'Login';
        }
        else {
            this.status = 'Register';
        }

      }

    ngOnInit() {
    }

}
