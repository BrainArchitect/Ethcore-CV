(function() {

    'use strict';

    angular.module('app').factory('DataBeautifierService', DataBeautifierService);
    DataBeautifierService.$inject = [ '$rootScope', '$log' ];

    function DataBeautifierService($rootScope, $log) {

        var service = {};
        service.getMethodology = getMethodology;
        service.getCompanySize = getCompanySize;
        service.getTechnology = getTechnology;
        service.beautify = beautify;
        service.getWorkProfiles = getWorkProfiles;

        return service;

        function getMethodology(methodology) {
            switch (methodology) {
            case "codereviews":
                return "Code reviews, for keeping fast bug catching and improving code quality.";
            case "prototyping":
                return "Prototyping, for bringing POCs of functionality early to life.";
            case "pairprogramming":
                return "Pair programming, because four eyes are always (well, almost!) better than two.";
            case "failfast":
                return "Fail fast - Since failure is knowledge, we need to get it fast!";
            case "unittests":
                return "Unit Tests - Building confidence for the quality of each part of the delivered code.";
            case "integrationtests":
                return "Integration testing to bring all parts of the puzzle together.";
            case "standups":
                return "Standups for exposing potential challenges and resolve time-cosuming issues.";
            case "qaprotocol":
                return "Quality Assurance protocol to maintain the quality of service during the development proccess.";
            case "freedomovertools":
                return "Freedom-over-tools: The goals to be achieved are more important that the means to get there.";
            case "onecommandbuild":
                return "One-command Build - Automated building and deployment to streamline development and delivery processes.";
            case "quickstart":
                return "Quickstart - Getting up to speed with the rest of the team in no time.";
            case "commitondayone":
                return "Commit on day one - Confident of making changes, ready to make things happen.";
            }
        }

        function getTechnology(technology) {
            switch (technology) {
            case "css3":
                return "CSS3 ";
            case "html5":
                return "HTML5";
            case "javascript":
                return "Javascript";
            case "node":
                return "NodeJS";
            case "rest":
                return "RESTful web API";
            case "jsonrpc":
                return "JSON-RPC";
            case "uiux":
                return "User Interface - User Experience";
            case "design":
                return "Design knowledge";
            case "p2p":
                return "P2P programming";
            case "ethereum":
                return "Ethereum platform";
            case "blockchain":
                return "Blockchain Technology";
            case "gametheory":
                return "Game Theory";
            case "cryptography":
                return "Cryptography";
            case "boardgames":
                return "Board Games";
            }
        }

        function getCompanySize(companySize) {
            switch (companySize) {
            case "LessThanTen":
                return {
                    min : 1,
                    max : 10
                };
            case "TenToTwenty":
                return {
                    min : 10,
                    max : 20
                };
            case "TwentyToFifty":
                return {
                    min : 20,
                    max : 50
                };
            case "FiftyToTwoHundred":
                return {
                    min : 50,
                    max : 100
                };
            case "MoreThanTwoHundred":
                return {
                    min : 100,
                    max : 200
                };
            }
        }

        function beautify(string) {
            switch (string) {
            case "NotYetChosen":
                return "Not yet chosen";
            default:
                return string;
            }
        }

        function getWorkProfiles(workProfiles) {
            var result = [];
            for (var i = 0; i < workProfiles.length; i++) {
                switch (workProfiles[i]) {
                case "newfeatures":
                    result.push("New features");
                    break;
                case "clientsupport":
                    result.push("Client support");
                    break;
                case "documentation":
                    result.push("Documentation");
                    break;
                default:
                    // Do nothing!
                    break;
                }
            }
            return result;
        }
    }
})();
