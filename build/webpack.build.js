const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  mode: "production",
  mode: "development",
  entry: './packages/index.ts',
  output: {
    path: resolve('../dist'),
    filename: 'rui-vue-lego.min.js',
    libraryTarget: 'umd',
    library: 'rui-vue-lego',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.json'],
    alias: {
        'vue': 'vue/dist/vue.esm.js',
        '@': resolve('../packages')
    }
  },
  externals: {
    vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        umd: 'vue'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'rui-vue-lego.css'
    }),
    // new UglifyJsPlugin({
    //   parallel: true,
    //   sourceMap: true
    // })
  ],
  module: {
    rules: [
      {
        // test: /\.vue$/,
        // loader: 'vue-loader'
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                css: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
                less: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            postLoaders: {
                html: 'babel-loader?sourceMap'
            },
            sourceMap: true,
        }
      },
      
      {
        test: /\.(js|jsx|es6)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // query: {
        //   presets: ["babel-preset-env"]
        // }
        include: [resolve('../packages'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.css$/,
         use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { 
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/] }
      }
    ]
  }
};
