const config = {}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          GENERAL SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Name of batch (will show up in generated csv's file name )
config.name = 'Bifinex'

// Save results to csv
config.saveToCsv = true

config.gekkoPath = '../app/'
config.gekkoConfigFileName = 'sample-config.js'

// URL that serving Gekko UI
config.apiUrl = 'http://localhost:3000'

// Keep it lower than the number of cores you have
// Note: 2 is recommended value for import mode
config.parallelQueries = 2

config.candleSizes = [30, 60]

config.historySizes = [10, 15]

// Format: [exchange, currency, asset]
config.tradingPairs = [
  ['bitfinex', 'usd', 'btc']
]

// Note: only one daterange for "import" mode allowed if parallelQueries > 1
// It's related to constraints with database
config.dateranges = [{
  from: '2019-02-24 00:00',
  to: '2019-11-22 00:00'
}]

// Shuffle generated combinations of method's configs
config.shuffle = true

// Initial balance, fees and slippage/spread
config.paperTrader = {
  simulationBalance: {
    currency: 1000,
    asset: 1
  },
  feeMaker: 0.25,
  feeTaker: 0.25,
  feeUsing: 'maker',
  slippage: 0.05
}

// Where to get method's settings.
// The first has high priority. Then second, if there's no settings in first place and so on.

// batcher – strategy settings below here
// gekko – gekko's config.js
// toml.js – gekko's toml files
config.configPriorityLocations = ['batcher', 'gekko', 'gekko-toml']

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          BACKTEST BATCHER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.methods = ['neuralnet']

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          BRUTEFORCE SEARCHER
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Specify strategy you want for bruteforce
//config.method = 'RSI'
config.method = 'neuralnet'

// Specify ranges settings for the given method. It generates all
// possible combinations of a set of settings with given ranges
// Format for range: 'start:step:end' or 'true|false'
//config.ranges = {
//  interval: '8:1:10',
//  thresholds: {
//    low: '24:1:26',
//    high: '70:1:80',
//    persistence: 1
//  }
//}
config.ranges = {
  threshold_buy : 1.0,
  threshold_sell : -1.0,
  method : 'adadelta',

  learning_rate : 1.2,
  momentum : 0.9,
  decay : 0.10,
  stoploss_enabled : 'true|false',
  stoploss_threshold : 0.90,
  hodl_threshold : 1,
  price_buffer_len : 100,
  min_predictions : 1000
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                          STRATEGY SETTINGS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

config.RSI = {
  interval: 15,
  thresholds: {
    low: 25,
    high: 75,
    persistence: 1
  }
}

config.MACD = {
  short: 10,
  long: 21,
  signal: 9,
  thresholds: {
    down: -0.000025,
    up: 0.000025,
    persistence: 1
  }
}

module.exports = config
