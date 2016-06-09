(function() {

    'use strict';

    angular.module('app').factory('DataService', DataService);
    DataService.$inject = [ '$rootScope', '$log', ];

    function DataService($rootScope, $log) {

        var service = {};
        service.get = getData;
        service.getOneOfSkills = getOneOfSkills;

        return service;

        function getData(s) {
            var parts = s.split(".");
            var result = job;
            for (var i = 0; i < parts.length; i++) {
                result = result[parts[i]];
            }
            if (result.constructor == {}.constructor) {
                return Object.keys(result);
            } else if (result.constructor == [].constructor) {
                return result;
            } else {
                return result;
            }
        }

        function getOneOfSkills() {
            var result = [];
            var data = job;
            for ( var oneof in data.technologies) {
                if (data.technologies.hasOwnProperty(oneof)) {
                    if (oneof.startsWith("oneof")) {
                        result.push(getData("technologies." + oneof));
                    }
                }
            }
            $log.info("OneOfSkills finally:");
            $log.info(result);
            return result;
        }
    }

})();
