import { Component, OnInit } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private bioService: BioService,
    private headerService: HeaderService

  ) {

  }

  onToggleDropdown() {
    document.body.classList.toggle('dropdown-open')
  }

  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'Home', homePath: '/', fragment: 'home', pagePath: '/' },
    { title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about' },
    {
      title: 'Projects',
      homePath: '/',
      fragment: 'projects',
      pagePath: '/projects',
    },
    { title: 'Contact Me', homePath: '/contact', fragment: 'contact-me', pagePath: '/contact' },
    { title: 'Resume', homePath: '/resume', fragment: 'resume', pagePath: '/assets/img/Tumaini David Ussiri Resume(final).pdf', target: '_blank' },
    // { title: 'My Blog', homePath: '/blog', fragment: '', pagePath: '/blog' },
  ];



  ngOnInit(): void { }
}

/** In this component file, you will inject two services: the bioService to
 * get your name from the bio JSON file and the headerService to figure out if the page currently displayed is the home page.
 * The latter allows you to decide whether the buttons should go to a separate page like /projects or perform anchor scrolling like with /#project.
 * menuItems contains all the menu items to display. The bio$ and isHome$ properties hold observables from the aforementioned services.*/
