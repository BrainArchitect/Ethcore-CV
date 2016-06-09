(function() {

    'use strict';

    angular.module("app").controller('MainController', MainController);

    MainController.$inject = [ '$scope', '$log', 'DataService', 'DataBeautifierService', "ChartService" ];

    function MainController($scope, $log, DataService, DataBeautifierService, ChartService) {
        var vm = this;

        vm.get = getD;
        vm.getDate = getDate;
        vm.getLevel = getLevel;
        vm.isMethodologyUsed = isMethodologyUsed;
        vm.getMethodologyText = getMethodologyText;
        vm.beautify = DataBeautifierService.beautify;
        vm.getTechnology = DataBeautifierService.getTechnology;
        vm.getChart = getChart;
        vm.getOneOfSkills = getOneOfSkills;
        vm.beautifyOneOf = beautifyOneOf;
        vm.getLevelOneOf = getLevelOneOf;

        init();

        function init() {
            vm.oneOfSkills = getOneOfSkills();
        }

        $scope.teamSlider = {
            min : getD('essentials.teamsize.min'),
            max : getD('essentials.teamsize.max'),
            options : {
                ceil : 10,
                floor : 0,
                showTicksValues : true,
                disabled : true
            },
        };

        $scope.companySlider = {
            min : DataBeautifierService.getCompanySize(getD('essentials.companysize')).min,
            max : DataBeautifierService.getCompanySize(getD('essentials.companysize')).max,
            options : {
                ceil : 80,
                floor : 0,
                step : 10,
                showTicksValues : true,
                disabled : true
            },
        };

        $scope.hoursSlider = {
            min : getD('specs.corehours.from') / 100,
            max : getD('specs.corehours.to') / 100,
            options : {
                ceil : 20,
                floor : 8,
                step : 1,
                showTicksValues : true,
                disabled : true
            },
        };

        $scope.holidaySlider = {
            min : getD('specs.holidays'),
            options : {
                ceil : 25,
                floor : 17,
                step : 1,
                showTicksValues : true,
                disabled : true
            },
        };

        function getD(s) {
            return DataService.get(s);
        }

        function getDate(timestamp) {
            return TimeTool.formatDate(timestamp);
        }

        function getLevel(technology) {
            if (technology == undefined) {
                return;
            }
            switch (getD("technologies." + technology)) {
            case "Familiar":
                return "0.40";
            case "Good":
                return "0.60";
            case "Expert":
                return "1.00";
            default:
                return "0.10";
            }
        }

        function isMethodologyUsed(methodology) {
            if (methodology == undefined) {
                return;
            } else {
                var value = getD("methodology." + methodology)
                if (value == true || value == false) {
                    return value;
                } else {
                    var result = {
                        "methodology" : methodology,
                        "value" : value
                    };
                    return result;
                }
            }
        }

        function getMethodologyText(methodology) {
            return DataBeautifierService.getMethodology(methodology);
        }

        function getChart() {
            ChartService.init(getD("profile"));
            return;
        }

        function getOneOfSkills() {
            return DataService.getOneOfSkills();
        }

        function beautifyOneOf(o) {
            return o.charAt(0).toUpperCase() + o.slice(1);
        }

        function getLevelOneOf(o) {
            return getValue(job.technologies, o);
        }

        function getValue(obj, name) {
            for ( var key in obj) {
                if (key.toString() == name) {
                    return obj[name];
                }
                if (obj.hasOwnProperty(key)) {
                    if ("object" == typeof (obj[key])) {
                        if (getValue(obj[key], name) != undefined) {
                            return getValue(obj[key], name);
                        } else {
                            continue;
                        }
                    }
                }
            }
        }
    }

})();
