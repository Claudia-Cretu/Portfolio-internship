import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule]
})
export class NavbarComponent {
  dropdownVisible = false;

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.dropdownVisible = !this.dropdownVisible;
  }
}