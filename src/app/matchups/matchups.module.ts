import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchupsPageRoutingModule } from './matchups-routing.module';

import { MatchupsPage } from './matchups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchupsPageRoutingModule
  ],
  declarations: [MatchupsPage]
})
export class MatchupsPageModule {}
