import { FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minSelectedCheckboxes(min: number = 1): ValidationErrors | null {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls.filter(control => control.value.checked);
    return totalSelected.length >= min ? null : { minSelected: true };
  };

  return validator;
}
