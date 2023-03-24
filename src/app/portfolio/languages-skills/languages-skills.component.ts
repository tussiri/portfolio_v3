import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-languages-skills',
  templateUrl: './languages-skills.component.html',
  styleUrls: ['./languages-skills.component.css']
})
export class LanguagesSkillsComponent implements OnInit {

  softSkills: any[];
  languages: any[];

  constructor(private http: HttpClient) { }
  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      displayInColumn: true,
      useSmallerHeadings: true,
      titleClasses: 'display-3',
    },
    {
      viewClasses: 'd-flex d-md-none',
      displayInColumn: true,
      useSmallerHeadings: true,
      titleClasses: '',
    },
  ];

  ngOnInit(): void {
    this.http.get<any>('assets/json/skill.json').subscribe(data => {
      this.softSkills = data.softSkills;
      this.languages = data.languages;
    });
  }

}
