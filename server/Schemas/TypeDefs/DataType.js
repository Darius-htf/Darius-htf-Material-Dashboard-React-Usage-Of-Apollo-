const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = graphql;

const LabelsType = new GraphQLObjectType({
  name: "Labels",
  fields: () => ({
    labels: { type: new GraphQLList(GraphQLString) },
  }),
});
module.exports = LabelsType;
