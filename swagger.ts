import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Optimized API Caching Gateway",
    description: "Auto-generated API documentation for the caching gateway.",
  },
  host: "localhost:3000", 
  schemes: ["http", "https"],
};

const outputFile = "./swagger-output.json"; 
const routes = ["./src/server.ts"];

swaggerAutogen()(outputFile, routes, doc);
