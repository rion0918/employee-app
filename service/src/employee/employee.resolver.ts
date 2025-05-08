import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private readonly employeeService: EmployeeService) {}

  @Mutation(() => Employee)
  createEmployee(
    @Args('name') name: string,
    @Args('team') team: string,
    @Args('memo', { nullable: true }) memo?: string,
  ) {
    return this.employeeService.create({ name, team, memo });
  }

  @Mutation(() => Employee)
  deleteEmployee(@Args('id', { type: () => Int }) id: number) {
    return this.employeeService.delete(id);
  }

  @Mutation(() => Employee)
  updateEmployee(
    @Args('id', { type: () => Int }) id: number,
    @Args('name') name: string,
    @Args('team') team: string,
    @Args('memo', { nullable: true }) memo?: string,
  ) {
    return this.employeeService.update(id, { name, team, memo });
  }

  @Query(() => Employee, { name: 'employee' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.employeeService.findOne(id);
  }

  @Query(() => [Employee])
  allEmployees() {
    return this.employeeService.findAll();
  }
}
