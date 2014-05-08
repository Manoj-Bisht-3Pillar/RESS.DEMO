var applicationLoggingService = angular.module('applicationLoggingService', []);
applicationLoggingService.factory(
    "applicationLoggingService",
    ["$log", "$window", function ($log, $window) {
        return ({
            error: function (message) {
                // preserve default behaviour
                $log.error.apply($log, arguments);
                // send server side
                $.ajax({
                    type: "POST",
                    url: "/logger",
                    contentType: "application/json",
                    data: angular.toJson({
                        url: $window.location.href,
                        message: message,
                        type: "error"
                    })
                });
            },
            info: function (message) {
                $log.log.apply($log, arguments);
                $.ajax({
                    type: "POST",
                    url: "/clientlogger",
                    contentType: "application/json",
                    data: angular.toJson({
                        url: $window.location.href,
                        message: message,
                        type: "debug"
                    })
                });
            }
        });
    }]
);