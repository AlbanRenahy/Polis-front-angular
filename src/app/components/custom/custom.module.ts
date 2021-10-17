import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomComponent } from "./custom.component";

@NgModule({
    declarations:[ CustomComponent],
    exports :[CustomComponent],
    imports: [CommonModule],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})

export class CustomModule{}