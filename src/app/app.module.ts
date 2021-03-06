import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faHome, faEnvelope, faUser, faTools, faGraduationCap, faBriefcase, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { ParallaxDirective } from './parallax.directive';
import { AboutComponent } from './about/about.component';
import { ColorSwitchDirective } from './colorSwitch.directive';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SkillsComponent,
        EducationComponent,
        ExperienceComponent,
        ParallaxDirective,
        AboutComponent,
        ColorSwitchDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private library: FaIconLibrary) {
        library.addIcons(faBars, faHome, faUser, faTools, faGraduationCap, faBriefcase, faEnvelope, faGithub, faLinkedinIn, faFileDownload);
    }
}
