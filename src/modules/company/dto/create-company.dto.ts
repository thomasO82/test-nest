// pour creer un DTO (Data Transfer Object) pour la creation d'une entreprise, il faut installer la librairie class-validator et class-transformer
// decorateur au dessus de la proprieté
import { IsString, Matches } from 'class-validator';
import { IsPhoneNumber } from '../../../validators/phone-number.validator';

export class CreateCompanyDto {
  @IsString()
  @Matches(/^[a-zA-Z0-9\s\-']{2,50}$/, { message: 'Company name must be between 2 and 50 characters and can only contain letters, numbers, spaces, hyphens, and apostrophes' })
  name: string;

  @IsString()
  @Matches(/^[a-zA-Z0-9\s,.'-]{5,100}$/, { message: 'Address must be between 5 and 100 characters and can only contain letters, numbers, spaces, commas, periods, hyphens, and apostrophes' })
  address: string;

  @IsString()
  @Matches(/^[a-zA-Z\s-']{2,50}$/, { message: 'City must be between 2 and 50 characters and can only contain letters, spaces, hyphens, and apostrophes' })
  city: string;

  @IsString()
  @Matches(/^\d{5}$/, { message: 'Zip code must be a 5 digit number' })
  zip: string;

  @IsString()
  @IsPhoneNumber({ message: 'Phone number must be a valid international number' })
  phone: string;
}