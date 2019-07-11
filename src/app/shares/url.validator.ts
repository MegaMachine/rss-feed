import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (control.value != null) {
    if ((!control.value.startsWith('http://') && !control.value.startsWith('https://')) || (!control.value.includes('rss') && !control.value.includes('feed'))) {
      return { validUrl: true };
    }
  }
  return null;
}
