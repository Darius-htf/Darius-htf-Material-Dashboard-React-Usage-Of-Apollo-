const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = graphql;

const ChartType = new GraphQLObjectType({
  name: "Chart",
  fields: () => ({
    labels: { type: new GraphQLList(GraphQLString) },
    datasets: {
      type: new GraphQLObjectType({
        name: "Dataset",
        fields: () => ({
          label: { type: GraphQLString },
          data: { type: new GraphQLList(GraphQLInt) },
        }),
      }),
    },
  }),
});

module.exports = ChartType;
