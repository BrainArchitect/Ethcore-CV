(function() {

    'use strict';

    angular.module('app').factory('ChartService', ChartService);
    ChartService.$inject = [ '$rootScope', '$log', 'DataService', 'DataBeautifierService' ];

    function ChartService($rootScope, $log, DataService, DataBeautifierService) {

        var service = {};
        service.init = init;

        return service;

        function init(workProfile) {
            var beautifulWorkProfile = DataBeautifierService.getWorkProfiles(workProfile);
            var ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
                type : 'doughnut',
                data : {
                    labels : beautifulWorkProfile,
                    datasets : [ {
                        data : [ DataService.get("profile." + workProfile[0]), DataService.get("profile." + workProfile[1]),
                                DataService.get("profile." + workProfile[2]) ],
                        backgroundColor : [ "#0F9684", "#735287", "#854E60" ],
                        hoverBackgroundColor : [ "#11BFA8", "#996BB5", "#AD667E" ]
                    } ]
                },
                options : {
                    legend : {
                        display : true,
                        labels : {
                            fontColor : "#CCCCCC",
                            fontSize : 13
                        }
                    }
                }
            });
        }
    }

})();
