import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  ngOnInit() {
    this.scaleToFit();
  }

  @HostListener('window:resize')
  onResize() {
    this.scaleToFit();
  }

  scaleToFit() {
    const container = document.querySelector('.container') as HTMLElement;
    if (container) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      const scaleX = screenWidth / 1675;
      const scaleY = screenHeight / 1054;
      
      const scale = Math.min(scaleX, scaleY);
      
      container.style.transform = `scale(${scale})`;
    }
  }
}