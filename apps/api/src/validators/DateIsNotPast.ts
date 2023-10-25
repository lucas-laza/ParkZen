import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  // ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'customDate', async: false })
export class DateIsNotPast implements ValidatorConstraintInterface {
  validate(
    date: Date,
    // args: ValidationArguments
  ) {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return date >= currentDate;
  }

  defaultMessage() {
    // args: ValidationArguments
    return 'Start date must not be in the past';
  }
}
