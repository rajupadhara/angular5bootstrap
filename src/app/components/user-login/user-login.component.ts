import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Userlogin } from './../../models/userlogin';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userlogin: Userlogin;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userlogin = new Userlogin();
  }

  userLoginInfo() {
      if (this.userlogin.userEmail != null && this.userlogin.userPassword != null) {
          this.router.navigate(['/dashboard']);
      }
  }

}
