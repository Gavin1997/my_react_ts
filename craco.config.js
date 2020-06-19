/*
 * @Author: GongWei
 * @Date: 2020-06-19 10:10:46
 * @LastEditors: GongWei
 * @LastEditTime: 2020-06-19 10:16:34
 * @FilePath: /my-react-ts-app/craco.config.js
 */
/* craco.config.js */
const CracoLessPlugin = require("craco-less")

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
