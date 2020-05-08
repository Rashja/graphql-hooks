import { gql } from "apollo-boost";
import merge from "lodash/merge";
import { formResolver, formTypeDefs } from "./form";
import { counterResolver, counterTypeDefs } from "./counter";
import { homeTypeDefs } from "./home";

export const typeDefs = [formTypeDefs, counterTypeDefs, homeTypeDefs];

export const resolvers = merge(formResolver, counterResolver);

/*-------------------------------------------------------------------------*/
