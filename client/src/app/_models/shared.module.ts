import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    })
  ],
  exports: [
    BsDropdownModule,
    TabsModule,
    NgxGalleryModule,
    ToastrModule,
    FileUploadModule
  ]
})
export class SharedModule { }
