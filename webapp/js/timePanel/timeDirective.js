/**
 * Created by valera on 05.09.15.
 */
App.directive('timeDirective', function(){
    console.log('arguments ===>', arguments);
    return {
        restrict: 'A',
        templateUrl: 'js/timePanel/timePanel.html'
    }
});
