import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContestantsPageRoutingModule } from './contestants-routing.module';

import { ContestantsPage } from './contestants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContestantsPageRoutingModule
  ],
  declarations: [ContestantsPage]
})
export class ContestantsPageModule {}
