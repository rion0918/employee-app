import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  team: string;

  @Field({ nullable: true })
  memo?: string;
}
