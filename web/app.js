(function() {

	'use strict';

	var app = angular.module('app', []);
	app.run(run);

	run.$inject = [ '$rootScope', '$log' ];

	function run($scope, $log) {
		$scope.get = getD;

		function getD(s) {
			var parts = s.split(".");

			if (Object.prototype.toString.call(parts) != '[object Array]') {
				return job.parts;
			}
			var result = job;
			for (var i = 0; i < parts.length; i++) {
				result = result[parts[i]];
			}
			return result;
		}

	}

})();
