import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from './company.service';
import { PrismaService } from '../prisma/prisma.service';

describe('CompanyService', () => {
  let service: CompanyService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    company: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompanyService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Exemple de test pour la méthode create
  describe('create', () => {
    it('should create a company', async () => {
      const companyData = {
        name: 'Test Company',
        address: '123 Test St',
        city: 'Test City',
        zip: '12345',
        phone: '+33612345678',
      };

      mockPrismaService.company.create.mockResolvedValue({
        id: 1,
        ...companyData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const result = await service.create(companyData);
      expect(result).toHaveProperty('id', 1);
      expect(mockPrismaService.company.create).toHaveBeenCalledWith({
        data: companyData,
      });
    });
  });
});