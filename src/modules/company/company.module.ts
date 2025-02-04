import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { PrismaModule } from '../prisma/prsima.module';


@Module({
  imports: [PrismaModule],
  providers: [CompanyService],
  controllers: [CompanyController]
})
export class CompanyModule {}
