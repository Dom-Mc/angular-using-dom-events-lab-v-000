function Counter() {
	return {
		require: 'counter',
		controllerAs: 'ctrl',
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ ctrl.count }}</div>',
			'</div>'
		].join(''),
		controller: function () {
			this.count = 0;
		},
    link: function(scope, element, attr, ctrl){
			element.on('click', function(){
				ctrl.count++;
				scope.$apply();
			});
			element.$on('$destroy', function(){
				element.off();
			});
		}
	};
}

angular
	.module('app')
	.directive('counter', Counter);
