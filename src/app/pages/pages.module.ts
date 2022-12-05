import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TranslocoModule } from '@ngneat/transloco';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { RegisterComponent } from './register/register.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import {MatListModule} from '@angular/material/list';
import { MenuFilterPipe } from './pipes/menu-filter.pipe';
import { EventListComponent } from './event-list/event-list.component';
import { SettingsComponent } from './settings/settings.component';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { EventEditDialog } from './event-list/event-edit/event-edit';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { FORMATS } from '../core/models/date-format/formats';
import {MatSelectModule} from '@angular/material/select';
import { EventTypePipe } from './pipes/event-type-pipe';
import { FeeTypePipe } from './pipes/fee-type-pipe';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    SidemenuComponent,
    MenuFilterPipe,
    EventListComponent,
    SettingsComponent,
    EventEditDialog,
    EventTypePipe,
    FeeTypePipe
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTabsModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
    
  ],
  providers:[{provide: MAT_DATE_FORMATS, useValue: FORMATS}],
  exports:[NavbarComponent,SidemenuComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PagesModule { }
