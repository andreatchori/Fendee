import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class SwalService
{
  constructor() {}

    /**
     * @author André ATCHORI
    */

    // tslint:disable-next-line:typedef
    errorAlert(content: any) {
      swal.fire({
        title: 'FENDEE',
        text: content,
        icon: 'error',
      });
    }

    // tslint:disable-next-line:typedef
    successAlert(content: any) {
      swal.fire({
        title: 'FENDEE',
        text: content,
        icon: 'success',
      });
    }

    // tslint:disable-next-line:typedef
    infosAlert(content: any) {
      swal.fire({
        title: 'FENDEE',
        text: content,
        icon: 'info',
      });
    }

}
