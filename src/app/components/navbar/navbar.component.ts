import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  temaOscuro(): void {
    const bodyElement = document.querySelector("body") as HTMLElement;
    const iconElement = document.querySelector("#dl-icon") as HTMLElement;
  
    if (bodyElement) {
      bodyElement.setAttribute("data-bs-theme", "dark");
    }
  
    if (iconElement) {
      iconElement.setAttribute("class", "bi bi-sun-fill");
    }
  }
  
  temaClaro(): void {
    const bodyElement = document.querySelector("body") as HTMLElement;
    const iconElement = document.querySelector("#dl-icon") as HTMLElement;
  
    if (bodyElement) {
      bodyElement.setAttribute("data-bs-theme", "light");
    }
  
    if (iconElement) {
      iconElement.setAttribute("class", "bi bi-moon-fill");
    }
  }
  
  cambiarTema(): void {
    const bodyElement = document.querySelector("body") as HTMLElement;
  
    if (bodyElement?.getAttribute("data-bs-theme") === "light") {
      this.temaOscuro();
    } else {
      this.temaClaro();
    }
  }
  
  goback(): void {
    this.router.navigate(['/login']);  
  }
}