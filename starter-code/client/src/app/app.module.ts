import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { EntryComponent } from './Entry/Entry.component';
import { RouterModule } from '@angular/router';
import { routes } from 'routes';
import { JournalService } from './services/journal.service';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      EntryComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(routes)
   ],
   providers: [JournalService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
