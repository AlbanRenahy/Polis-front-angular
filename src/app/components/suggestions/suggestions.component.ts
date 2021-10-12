import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/shared/models/categorie';
import { Lieu } from 'src/app/shared/models/lieu';
import { LieuService } from 'src/app/shared/services/lieu.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  lieux: Lieu[] = [];


  constructor(private lieuService: LieuService) { }

  ngOnInit(): void {
    this.lieuService.getAll().subscribe((lieux : Lieu[])=> {
      this.lieux= lieux;
      
      
    })
  }

}
