import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',

})

export class AppSignUp implements OnInit {

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
