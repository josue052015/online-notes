import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { INote } from 'src/app/core/interfaces/notes.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedTab = "All"
  tabs = ['All', 'Recicle bin', 'Shared']
  notes: INote[] = []
  loading = false;
  constructor(
    private notesService: NotesService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(newTab?) {
    if(newTab) this.selectedTab = newTab;
    switch (this.selectedTab) {
      case "All":
        this.getNotes()
        break;
      case "Recicle bin":
        this.getRecicleBin()
        break;
    }
    this.changeDetectorRef.detectChanges()
  }
  getNotes() {
    this.loading = true;
    this.notesService.getNotes().subscribe((response: INote[]) => {
      this.notes = response
      this.loading = false
    }, error => {
      this.loading = false
    })
  }
  getRecicleBin(){
    this.notesService.getRecicleBin().subscribe((response: INote[]) => {
      this.notes = response
      this.loading = false
    }, error => {
      this.loading = false
    })
  }

}
