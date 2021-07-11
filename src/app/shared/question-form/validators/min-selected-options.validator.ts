import { FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minSelectedCheckboxes(min: number = 1): ValidationErrors | null {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map(control => control.value.checked)
      .reduce((prev, next) => next ? prev + next : prev, 0);
    return totalSelected >= min ? null : {minSelected: true};
  };

  return validator;
}
