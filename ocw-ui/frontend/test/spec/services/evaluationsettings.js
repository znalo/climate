/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *    http: *www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use strict';

describe('Service: evaluationSettings', function () {

  // load the service's module
  beforeEach(module('ocwUiApp'));

  // instantiate service
  var evaluationSettings;
  beforeEach(inject(function (_evaluationSettings_) {
    evaluationSettings = _evaluationSettings_;
  }));

  it('should initialize the evaluationSettings service', function() {
    inject(function(evaluationSettings) {
      expect(evaluationSettings).not.toEqual(null);
    });
  });

  it('should provide a getSettings function', function() {
    inject(function(evaluationSettings) {
      expect(evaluationSettings.getSettings()).not.toEqual(null);
    })
  })
});
