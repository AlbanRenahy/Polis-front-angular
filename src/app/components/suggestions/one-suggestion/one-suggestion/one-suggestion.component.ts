import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from 'src/app/shared/models/categorie';
import { Lieu } from 'src/app/shared/models/lieu';

@Component({
  selector: 'app-one-suggestion',
  templateUrl: './one-suggestion.component.html',
  styleUrls: ['./one-suggestion.component.scss']
})
export class OneSuggestionComponent implements OnInit {
  @Input() lieu!:Lieu;
  @Input() categories!:Categorie[]



  constructor() { }

  ngOnInit(): void {
   
  }

}