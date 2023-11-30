import { Component, OnInit } from '@angular/core';
import { INote } from 'src/app/core/interfaces/notes.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedTab = "Notes"
  tabs = ['Notes', 'Recicle bin', 'Shared']
  notes: INote[] = []
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    switch (this.selectedTab) {
      case "Notes":
        this.getNotes()
        break;
    }
  }
  getNotes() {
    this.notesService.getNotes().subscribe((response: INote[]) => {
      this.notes = response
      console.log('notes', this.notes)
    })
  }

}
