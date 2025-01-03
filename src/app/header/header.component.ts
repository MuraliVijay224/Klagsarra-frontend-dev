import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  backgroundColor: string = "#000000";
  @ViewChild('searchButton') searchButton!: ElementRef;
  logoScrolled: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = "#000000";
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(): void {
    if (window.innerWidth > 875) {
      if (window.scrollY > 20) {
        this.backgroundColor = '#000000';
        this.logoScrolled = true;
      } else {
        this.backgroundColor = 'transparent';
        this.logoScrolled = false;
      }
    } else {
      this.backgroundColor = '#000000';
      this.logoScrolled = true;
    }
  }

  toggleNavbar() {
    const navbarCollapse = document.getElementById('navbarCollapse');
    if (navbarCollapse) {
      navbarCollapse.classList.toggle('show');
    }
  }

  menDropdownOpen: boolean = false;
  womenDropdownOpen: boolean = false;

  toggleMenDropdown(value: boolean) {
    this.menDropdownOpen = value;
    this.womenDropdownOpen = false; // Close women dropdown if open
  }

  toggleWomenDropdown(value: boolean) {
    this.womenDropdownOpen = value;
    this.menDropdownOpen = false; // Close men dropdown if open
  }

}
