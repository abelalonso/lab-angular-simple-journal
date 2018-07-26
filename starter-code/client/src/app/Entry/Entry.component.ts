import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-Entry',
  templateUrl: './Entry.component.html',
  styleUrls: ['./Entry.component.css']
})
export class EntryComponent implements OnInit {

  entry: any = {};
  id: string = '';
  constructor( private journalService: JournalService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
        .subscribe(params=> this.id = params['id'])
    this.journalService.getEntryById(this.id)
      .subscribe(entry => {
        console.log('respuesta de cliente', entry)
        this.entry=entry;
      })
  }

}
