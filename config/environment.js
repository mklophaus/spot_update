var _ = require('lodash');

var localEnvVars = {
  TITLE:      'Spot Update',
  SAFE_TITLE: 'spot_update'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
