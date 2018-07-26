import { Component, OnInit } from '@angular/core';
import { Entry, JournalService } from '../services/journal.service';


@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  entries:any= [];

  constructor(private journalService: JournalService) { }

  ngOnInit() {
    this.journalService.getEntries()
      .subscribe(entries => {
        console.log(entries)
        this.entries=entries;
      })
  }

}
