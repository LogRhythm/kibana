/*
 * THIS FILE HAS BEEN MODIFIED FROM THE ORIGINAL SOURCE
 * This comment only applies to modifications applied after the f421eec40b5a9f31383591e30bef86724afcd2b3 commit
 *
 * Copyright 2020 LogRhythm, Inc
 * Licensed under the LogRhythm Global End User License Agreement,
 * which can be found through this page: https://logrhythm.com/about/logrhythm-terms-and-conditions/
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { i18n } from '@kbn/i18n';

import { TUTORIAL_CATEGORY } from '../../../common/tutorials/tutorial_category';
import { createOnPremInstructions } from './on_prem';
import { createElasticCloudInstructions } from './elastic_cloud';
import { createOnPremElasticCloudInstructions } from './on_prem_elastic_cloud';

export function netflowSpecProvider() {
  return {
    id: 'netflow',
    name: 'Netflow',
    category: TUTORIAL_CATEGORY.SIEM,
    shortDescription: i18n.translate('kbn.server.tutorials.netflow.tutorialShortDescription', {
      defaultMessage: 'Collect Netflow records sent by a Netflow exporter.',
    }),
    longDescription: i18n.translate('kbn.server.tutorials.netflow.tutorialLongDescription', {
      defaultMessage:
        'The Logstash Netflow module collects and parses network flow data, \
indexes the events into Elasticsearch, and installs a suite of NetMon dashboards. \
This module support Netflow Version 5 and 9. [Learn more]({linkUrl}).',
      values: {
        linkUrl: '{config.docs.logstash}/netflow-module.html',
      },
    }),
    completionTimeMinutes: 10,
    //previewImagePath: 'kibana-apache.png', TODO
    onPrem: createOnPremInstructions(),
    elasticCloud: createElasticCloudInstructions(),
    onPremElasticCloud: createOnPremElasticCloudInstructions(),
  };
}
