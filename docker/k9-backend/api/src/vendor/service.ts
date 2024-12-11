import { Vendor } from './entity';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class VendorService {
  constructor(
      @Inject('VENDOR_REPOSITORY')
      private vendorRepository: Repository<Vendor>,
  ) {}

  async getList(): Promise<Vendor[]> {
    return this.vendorRepository.find();
  }

  // getOne(id: number) {
  //   return vendors.find((vendor) => vendor.id === id);
  // }
  //
  // create(vendor) {
  //   vendors.push({ id: 2, ...vendor });
  //   return vendor;
  // }
  //
  // update(id: number, vendor) {
  //   const vendorId = vendors.findIndex((item) => item.id === id);
  //   vendors[vendorId] = { ...vendors[vendorId], ...vendor };
  //   return vendor;
  // }
  //
  // delete(id: number) {
  //   const vendorId = vendors.findIndex((item) => item.id === id);
  //   const vendorDeleted = vendors[vendorId];
  //   vendors.splice(vendorId, 1);
  //   return vendorDeleted;
  // }
}
