const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} = graphql;

const chartsData = require("../barChartData.json");
const ChartType = require("./TypeDefs/DataType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    GetReportsChartsData: {
      type: new GraphQLList(ChartType),
      resolve(parent, args) {
        return chartsData;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
