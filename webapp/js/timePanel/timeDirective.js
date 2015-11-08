App.directive('timeDirective', function(){
    console.log('arguments ===>', arguments);
    return {
        restrict: 'A',
        templateUrl: 'js/timePanel/timePanel.html'
    }
});
