import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-adress-search',
  templateUrl: './adress-search.component.html',
  styleUrls: ['./adress-search.component.scss']
})
export class AdressSearchComponent {
  title = 'google-places-autocomplete';
  userAddress: string = ''
  userLatitude: string = ''
  userLongitude: string = ''

  @ViewChild("placesRef")
  placesRef!: GooglePlaceDirective;

  handleAddressChange(address: any) {
    this.userAddress = address.formatted_address
    this.userLatitude = address.geometry.location.lat()
    this.userLongitude = address.geometry.location.lng()
  }
}
