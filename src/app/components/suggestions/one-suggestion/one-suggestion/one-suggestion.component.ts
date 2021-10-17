import { Component, Input, OnInit,AfterViewInit } from '@angular/core';
import { Categorie } from 'src/app/shared/models/categorie';
import { Image } from 'src/app/shared/models/image';
import { Lieu } from 'src/app/shared/models/lieu';
import { LieuService } from 'src/app/shared/services/lieu.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-one-suggestion',
  templateUrl: './one-suggestion.component.html',
  styleUrls: ['./one-suggestion.component.scss']
})
export class OneSuggestionComponent implements OnInit {
  @Input() id!: number;
  @Input() lieu!:Lieu;
  @Input() categorie!:Categorie;
  @Input() image!:Image;
 
 



  constructor(private route: ActivatedRoute,private lieuService : LieuService, private router: Router) {
    this.lieuService=lieuService;
   }

  ngOnInit(): void {
    
   
  }

 


}
