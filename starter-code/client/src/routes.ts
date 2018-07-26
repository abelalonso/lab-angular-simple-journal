import { Routes} from "@angular/router";
import { HomeComponent } from "app/Home/Home.component";
import { EntryComponent } from "app/Entry/Entry.component";


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'journal-entries/:id', component: EntryComponent}
]