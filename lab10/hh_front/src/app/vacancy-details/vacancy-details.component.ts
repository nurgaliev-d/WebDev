import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HhService } from '../hh.service';
import { Vacancy } from '../interfaces';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit {
  vacancy!: Vacancy;

  constructor(
    private route: ActivatedRoute,
    private hhService: HhService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Explicitly convert string to number
    if (!isNaN(id)) {
      this.hhService.getVacancy(id).subscribe(vacancy => {
        this.vacancy = vacancy;
      });
    } else {
      console.error('Invalid vacancy ID');
    }
  }
}
