import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Order } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}
  
  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  public async getById(id: Order['id']): Promise<Order | null> {
    const order = await this.prismaService.order.findUnique({
      where: { id }
    });
    if(!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  public async removeOrder(id: Order['id']): Promise<Order> {
    const order = await this.prismaService.order.findUnique({
      where: { id }
    });
    if(!order) {
      throw new NotFoundException('Order not found');
    }
    return this.prismaService.order.delete({
      where: { id },
    });
  }

  public create(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order> {
    return this.prismaService.order.create({
      data: orderData,
    });
  }

  public async updateById(id: Order['id'], orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<Order> {
    const order = await this.prismaService.order.findUnique({
      where: { id }
    });
    if(!order) {
      throw new NotFoundException('Order not found');
    }

    return this.prismaService.order.update({
      where: { id },
      data: orderData,
    });
  }
}
