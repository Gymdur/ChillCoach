/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var express    = require('express'),
  app          = express(),
//  bluemix      = require('./config/bluemix'),
  watson       = require('watson-developer-cloud'),
  extend       = require('util')._extend,
  i18n         = require('i18next');

//i18n settings
require('./config/i18n')(app);

// Bootstrap application settings
require('./config/express')(app);

//Testing unauthenticated requests -- doesnt work
var dialog = watson.dialog({
	version: 'v1',
	use_unauthenticated: true
});
// Create the service wrapper
var personalityInsights = watson.personality_insights({
  version: 'v2',
//  url: '://gateway.watsonplatform.net/personality-insights/api',
  username: '21ea701f-3ed0-4d2a-8465-c273b87fad80',
  password: 'IhLjp7My1oxx'
});

app.get('/', function(req, res) {
  res.render('index', { ct: req._csrfToken });
});

app.post('/api/profile', function(req, res, next) {
  var parameters = extend(req.body, { acceptLanguage : i18n.lng() });

  personalityInsights.profile(parameters, function(err, profile) {
    if (err)
      return next(err);
    else
      return res.json(profile);
  });
});

//Tonal Analysis service wrapper
var toneAnalyzer = watson.tone_analyzer({
        version: 'v2-experimental',
        username: '78e3f870-ba0e-4e83-8179-1475870f82ad',
        password: 'VBHyLZRedoXj'

});

app.post('/tone', function(req, res, next) {
	toneAnalyzer.tone(req.body, function(err, data) {
	if (err)
		return next(err);
	else
		return res.json(data);
	});
});

app.get('/synonyms', function(req, res, next) {
	toneAnalyzer.synonym(req.query, function(err, data) {
	if (err)
		return next(err);
	else
		return res.json(data);
	});
});

// error-handler settings
require('./config/error-handler')(app);

var port = process.env.VCAP_APP_PORT || 3000;
app.listen(port);
console.log('listening at:', port);
