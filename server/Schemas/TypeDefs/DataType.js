const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = graphql;

const LabelType = new GraphQLObjectType({
  name: "Label",
  fields: () => ({
    id: { type: GraphQLInt },
    label: { type: GraphQLString },
  }),
});

module.exports = LabelType;
