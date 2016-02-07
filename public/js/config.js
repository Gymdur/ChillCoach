/**
* Copyright 2015 IBM Corp. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
'use strict';
var HIGHLIGHT_ANIMATION_DURATION = 500,
TOP_N_WEIGHTED_POSITIVE_LIWC = 3,
TOP_N_WEIGHTED_NEGATIVE_LIWC = 3,
WORD_TRAIT_CORR_TYPE = {
positive: 'positive',
negative: 'negative'
};
var COLOR_SCHEMA = {
'emotion_tone': '#FF5003',
'Anger': '#AD1625',
'sadness': '#562f72',
'anxiety': '#311a41',
'Negative': '#d74108',
'Cheerfulness': '#db2780',
'writing_tone': '#5aa700',
'causation': '#3690C0',
'Analytical': '#4b8400',
'Tentative': '#0a3c02',
'insight': '#023858',
'certainty': '#A6BDDB',
'Confident': '#2d660A',
'social_tone': '#5596e6',
'family_c': '#a6d96a',
'Conscientiousness_Big5': '#264a60',
'friends': '#74c476',
'Openness_Big5': '#4178be',
'leisure': '#238b45',
'Agreeableness_Big5': '#325c80',
'refs_to_others': '#006d2c',
'distant': '#006d2c'
};
