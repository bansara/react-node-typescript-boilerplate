const path = require("path");

module.exports = {
  entry: path.join(__dirname, "/src/app.tsx"),
  output: {
    filename: "main.js",
    path: path.join(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
