import { Categorie } from "./categorie";
import { TempsDeVisite } from "./tempsDeVisite";


export interface Lieu {

    id: number;
    latitude: number;
    longitude: number;
    nomLieu: string;
    adresse: string;
    description : string;
    ville: string;
    note: string;
    categories : Categorie[];
    tempsDeVisite : TempsDeVisite;
}

