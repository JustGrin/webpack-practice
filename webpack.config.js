var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  const config = {
    entry: './src/app.js',
    output: {
      path: `${__dirname}/dist`,
      filename: "js/[name].bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: `${__dirname}/node_modules/`,
          include: `${__dirname}/src/`,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
          // loaders: [
          //   'style-loader',
          //   { loader: 'css-loader', query: { importLoaders: 1 } },
          //   'postcss-loader'
          // ]
        },
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader', // less 不需要使用 importLoaders: 1 参数,但需要引入 less-loader
            'postcss-loader',
            'less-loader',
          ]
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.ejs$/,
          loader: 'ejs-loader',
        },
        // {
        //   test: /\.(png|jpg|gif|ico)$/i,
        //   loader: 'file-loader',
        //   options: {
        //     name: 'assets/[name]-[hash:5].[ext]'
        //   },
        // },
// 和 file-loader 一样都是处理文件的，但是可以将小于limit值文件存成base64码
        {
          test: /\.(png|jpg|gif|ico)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 200000,
                name: 'assets/[name]-[hash:5].[ext]'
              },
            },
            'image-webpack-loader',
          ]
        },
      ]
    },
    plugins: [
      new htmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        title: 'test_title',
        inject: 'body',
      }),
    ]
  }
  return config
}
