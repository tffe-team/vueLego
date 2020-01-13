const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  mode: "production",
  entry: './src/index.ts',
  publicPath: '/',
  output: {
    path: resolve('../dist'),
    filename: 'rui-vue-lego.min.js',
    libraryTarget: 'umd',
    library: 'rui-vue-lego',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.json', '.css'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('../src'),
      'src': resolve('../src'),
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
      filename: 'rui-vue-lego.css',
      allChunks: true,
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
        }
      }
    })
  ],
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
            scss: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                },
              },
            ],
          },
          postLoaders: {
            html: 'babel-loader?sourceMap'
          },
          sourceMap: false,
        }
      },

      {
        test: /\.(js|jsx|es6|tsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [resolve('../src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: resolve('../dist')
                }
            },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(png|jpg|gif)?$/,
        loaders: ['url-loader?limit=8192&name=[name]_[sha512:hash:base64:7].[ext]']
      },
      {
        test: /\.(eot|woff|ttf|svg)$/,
        loader: 'url-loader?limit=81920&name=[name]_[sha512:hash:base64:7].[ext]'
      }
    ]
  }
};
