import { Component } from '@angular/core';
import { SignupComponent } from "./components/signup/signup.component";
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeroComponent]
})
export class AppComponent {
  title = 'my-angular';
}