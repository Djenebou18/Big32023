import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviestorsPageRoutingModule } from './moviestors-routing.module';

import { MoviestorsPage } from './moviestors.page';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    MoviestorsPageRoutingModule
  ],
  declarations: [MoviestorsPage]
})
export class MoviestorsPageModule {}
