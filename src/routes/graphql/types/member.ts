import { GraphQLObjectType, GraphQLEnumType, GraphQLInt, GraphQLFloat, GraphQLInputObjectType  } from "graphql";

export const MemberTypeId = new GraphQLEnumType({
  name: 'MemberTypeId',
  values: {
    BASIC: { value: 'BASIC' },
    BUSINESS: { value: 'BUSINESS' },
  },
});

export const MemberType = new GraphQLObjectType<MemberQuery>({
  name: 'MemberType',
  fields: () => ({
    id: { type: MemberTypeId },
    discount: { type: GraphQLFloat },
    postsLimitPerMonth: { type: GraphQLInt },
  }),
});

export const MemberCreateType = new GraphQLInputObjectType({
  name: 'CreateMemberInput',
  fields: {
    discount: { type: GraphQLFloat },
    postsLimitPerMonth: { type: GraphQLInt },
  },
});

export type Member = {
  id: 'BASIC' | 'BUSINESS',
  discount: number,
  postsLimitPerMonth: number,
};

export type MemberQuery = { id: string } & Member;

export type MemberCreate = { dto: Member }
