import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { Project1Component } from './projects/project1/project1.component';
import { Project2Component } from './projects/project2/project2.component';
import { Project3Component } from './projects/project3/project3.component';
import { Project4Component } from './projects/project4/project4.component';
import { Project5Component } from './projects/project5/project5.component';
import { Project6Component } from './projects/project6/project6.component';
import { ContactComponent } from './contact/contact.component';
import { SmartMobileComponent } from './smart-mobile/smart-mobile/smart-mobile.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'project1', component: Project1Component },
  { path: 'project2', component: Project2Component },
  { path: 'project3', component: Project3Component },
  { path: 'project4', component: Project4Component },
  { path: 'project5', component: Project5Component },
  { path: 'project6', component: Project6Component },
  { path: 'contact', component: ContactComponent },
  { path: 'smart-mobile', component: SmartMobileComponent },
];