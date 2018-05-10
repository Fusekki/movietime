import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


  reports: string[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.getReports();
  }

  getReports(): void {
    this.reports = this.reportService.getReports();
  }

  addReport(content: string): void {
    console.log('Adding to report ' + content);
    if (!content) { return; }
    this.reportService.addReport(content);
    this.getReports();
  }

}
