import { PartialType } from '@nestjs/mapped-types'; //biensur faut l'installer
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}