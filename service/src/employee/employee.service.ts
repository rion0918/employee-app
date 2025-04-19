import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  //新規登録メソッド
  create(data: { name: string; team: string; memo?: string }) {
    return this.prisma.employee.create({ data });
  }

  //削除メソッド
  delete(id: number) {
    return this.prisma.employee.delete({ where: { id } });
  }
  
  //更新メソッド
  update(id: number, data: { name: string; team: string; memo?: string }) {
    return this.prisma.employee.update({
      where: { id },
      data,
    });
  }

  //ID指定取得メソッド
  findOne(id: number) {
    return this.prisma.employee.findUnique({ where: { id } });
  }
  
  //全件一覧取得メソッド
  findAll() {
    return this.prisma.employee.findMany();
  }
}
