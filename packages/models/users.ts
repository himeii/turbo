import { Prisma } from "database";

export { type User } from "database";
export type CreateUserDTO = Prisma.UserCreateInput;
export type UpdateUserDTO = Prisma.UserUpdateInput;
export type UpdateUserParams = {
  where: Prisma.UserWhereUniqueInput;
  data: UpdateUserDTO;
};
