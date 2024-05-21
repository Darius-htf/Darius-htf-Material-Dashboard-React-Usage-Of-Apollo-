const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = graphql;

const LabelType = new GraphQLObjectType({
  name: "Label",
  fields: () => ({
    id: { type: GraphQLInt },
    label: { type: GraphQLString },
  }),
});

const LabelsType = new GraphQLObjectType({
  name: "Labels",
  fields: () => ({
    labels: { type: new GraphQLList(LabelType) },
  }),
});

module.exports = LabelsType;
