const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} = graphql;

const chartsData = require("../barChartData.json");
console.log(chartsData);
const LabelsType = require("./TypeDefs/DataType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    GetReportsChartsData: {
      type: new GraphQLList(LabelsType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return chartsData; // Return an array of BarChartData
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
