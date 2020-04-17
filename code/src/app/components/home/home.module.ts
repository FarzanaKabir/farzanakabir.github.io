import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HomeComponent, PersonalDetailsComponent, AboutMeComponent, EducationComponent, ExperienceComponent, SkillsComponent, PortfolioComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
