import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

// components
import { CreateCardComponent } from './create-card/create-card.component';
import { CardTableComponent } from './card-table/card-table.component';
import { StationsComponent } from './stations/stations.component';
import { LoadCardComponent } from './load-card/load-card.component';
import { CardService } from './services/card-service';
import { CardInfoComponent } from './card-info/card-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent,
    CardTableComponent,
    StationsComponent,
    LoadCardComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatButtonModule,
    MatSortModule, 
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
