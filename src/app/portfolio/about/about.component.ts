import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/core/services/bio.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  showImage: boolean;
  background: boolean;
  about: boolean;
  getFontColor() {
    const screenWidth = window.innerWidth;
    return { color: screenWidth >= 768 ? 'black' : 'white' };

  }

  constructor(private bioService: BioService, private activatedRoute: ActivatedRoute) { }
  bio$ = this.bioService.getBio();

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      headingClass: 'display-3',
      useSmallerHeadings: true,
    },
    {
      viewClasses: 'd-flex d-md-none',
      headingClass: '',
      useSmallerHeadings: true,
    },
  ];

  ngOnInit() {
    this.showImage = this.activatedRoute.snapshot.data.showImage;
    this.background = this.activatedRoute.snapshot.data.background
    this.about = this.activatedRoute.snapshot.data.about
  }
}

// The “About” information will come from the BioService, and once its getBio method is called, the observable will be stored in the bio$ property.
// respOptions helps with responsiveness by providing optional CSS classes for different display sizes.
