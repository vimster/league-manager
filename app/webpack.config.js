const path = require('path');

module.exports = {
  watch: true,
  entry: {
  	index: './src/pages/index.js',
  	matchdays: './src/pages/matchdays.js',
    leagueCreate: './src/pages/leagueCreate.js',
    leagueEditName: './src/pages/leagueEditName.js',
    leagueEditTeams: './src/pages/leagueEditTeams.js',
    leagueEditMatchdays: './src/pages/leagueEditMatchdays.js',
  	table: './src/pages/table.js',
    leagues: './src/pages/leagues.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  //optimization: {
  //  splitChunks: {
  //    chunks: 'all'
  //  }
  //},
  optimization: {
   splitChunks: {
    cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  externals: {
		context: 'context',
},
	module: {
	  rules: [
	    {
	      test: /\.m?js$/,
	      exclude: /(node_modules)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env', '@babel/preset-react'],
	          plugins : [
							
											['@babel/plugin-proposal-class-properties', { "loose": true }]
				]
	        }
	      }
	    }
	  ]
	}
};