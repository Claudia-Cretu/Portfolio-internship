import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  scrollToSkillsSection() {
    document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToInfoSection() {
    document.getElementById('info-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToProjectsSection() {
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  }
}