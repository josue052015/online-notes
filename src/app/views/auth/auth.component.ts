import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {
  @ViewChild('actionComponent', {read: ViewContainerRef}) actionComponent: ViewContainerRef;
  action;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.action = params.get('action');
      this.setAction()
    });
  }

  setAction() {
    let component;
    switch (this.action.toLowerCase()) {
      case "login":
        component = LoginComponent
        break;
      case "register":
        component = RegisterComponent
        break;
      default:
        //TODO: throw error page
        break;
    }
    if (this.actionComponent) {
      this.actionComponent.clear()
    }
    const componentRef = this.actionComponent.createComponent<any>(component)

  }

}
