'use strict';

var stacktraceService = angular.module('stacktraceService', []);
stacktraceService.factory("stacktraceService",function () {
                return ({
                    print: printStackTrace
                });

            }
        );