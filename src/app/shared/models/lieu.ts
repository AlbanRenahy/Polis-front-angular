import { Categorie } from "./categorie";
import { Image } from "./image";
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
    categorie : Categorie;
    tempsDeVisite : TempsDeVisite;
    image : Image;
}

