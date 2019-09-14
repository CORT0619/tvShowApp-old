import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.scss']
})
export class ErrorToast {
  errorMsg = 'some error message';

  constructor(
    public toastController: ToastController
  ) { }

  async showToast() {
    const toast = await this.toastController.create({
      message: this.errorMsg,
      showCloseButton: true,
      closeButtonText: 'close'
    });
    toast.present();
  }
}
