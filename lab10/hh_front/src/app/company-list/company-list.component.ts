import { Component, OnInit } from '@angular/core';
import { HhService } from '../hh.service';
import { Company } from '../interfaces';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies!: Company[];

  constructor(private hhService: HhService) { }

  ngOnInit(): void {
    this.hhService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }
}
