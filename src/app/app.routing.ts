import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {EducationComponent} from './education/education.component';
import {ExperienceComponent} from './experience/experience.component';
import {ContactComponent} from './contact/contact.component';
import {ResumeComponent} from './resume/resume.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/aboutme', pathMatch: 'full'},
  {path: 'aboutme', component: AboutMeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'contact', component: ContactComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
