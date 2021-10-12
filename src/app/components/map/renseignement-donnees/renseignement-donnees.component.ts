import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/shared/models/categorie';
import { CategorieService } from 'src/app/shared/services/categorie.service';
/**imports formulaire */
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { LieuService } from 'src/app/shared/services/lieu.service';
import { Lieu } from 'src/app/shared/models/lieu';

@Component({
  selector: 'app-renseignement-donnees',
  templateUrl: './renseignement-donnees.component.html',
  styleUrls: ['./renseignement-donnees.component.scss']
})
export class RenseignementDonneesComponent implements OnInit {
  formulaire : FormGroup;
 
  categories: Categorie[] = [];
  constructor(private categorieService: CategorieService,private fb: FormBuilder, private lieuService:LieuService) {
    this.formulaire= this.fb.group({
      nomLieu: new FormControl(),
      adresse: new FormControl(),
      description: new FormControl(),
      ville: new FormControl(),
      

    })
   }

  ngOnInit(): void {
    this.categorieService.getAll().subscribe((categories : Categorie[])=> {
      this.categories= categories;
    })
  }

  addOne():void{
    this.lieuService.addOne(this.formulaire.value).subscribe((newLieu: Lieu) => {
      console.log(newLieu);
      this.formulaire.reset();
    });
  
  console.log(this.formulaire);
}

}
