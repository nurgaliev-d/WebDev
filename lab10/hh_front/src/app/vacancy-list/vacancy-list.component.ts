import { Component, OnInit } from '@angular/core';
import { HhService } from '../hh.service';
import { Vacancy } from '../interfaces';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies!: Vacancy[];

  constructor(private hhService: HhService) { }

  ngOnInit(): void {
    this.hhService.getVacancies().subscribe(vacancies => {
      this.vacancies = vacancies;
    });
  }
}
