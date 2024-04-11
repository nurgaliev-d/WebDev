import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HhService } from '../hh.service';
import { Company } from '../interfaces';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  company?: Company;

  constructor(
    private route: ActivatedRoute,
    private hhService: HhService
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || ''); // Parse string to number
    if (!isNaN(id)) {
      this.hhService.getCompany(id).subscribe(company => {
        this.company = company;
      });
    } else {
      console.error('Invalid company ID');
    }
  }
}
