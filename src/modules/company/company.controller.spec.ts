import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

describe('CompanyController', () => {
  let controller: CompanyController;

  // Create mock service with all methods used in controller
  const mockCompanyService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [
        {
          provide: CompanyService,
          useValue: mockCompanyService,
        },
      ],
    }).compile();

    controller = module.get<CompanyController>(CompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Example test for create method
  describe('create', () => {
    it('should create a company', async () => {
      const createCompanyDto = {
        name: 'Test Company',
        address: '123 Test St',
        city: 'Test City',
        zip: '12345',
        phone: '+33612345678',
      };

      mockCompanyService.create.mockResolvedValue({
        id: 1,
        ...createCompanyDto,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const result = await controller.create(createCompanyDto);
      expect(result).toHaveProperty('id', 1);
      expect(mockCompanyService.create).toHaveBeenCalledWith(createCompanyDto);
    });
  });
});