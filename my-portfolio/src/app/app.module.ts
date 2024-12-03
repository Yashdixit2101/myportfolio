import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';



@NgModule({
  declarations: [
    AppComponent, 
    BannerComponent, 
    ContactComponent, 
    PersonalInformationComponent, 
    ProjectComponent, 
    SkillsComponent, 
    EducationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
