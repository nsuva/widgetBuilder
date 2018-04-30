
window.scrollTo(0,1);




// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
		
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
		
		// url will be nested (/form/type)
		.state('form.welcome', {
            url: '/welcome',
            templateUrl: 'form-welcome.html'
        })
		
        // url will be nested (/form/type)
		.state('form.type', {
            url: '/type',
            templateUrl: 'form-type.html'
        })
        
        // url will be /form/layout
        .state('form.layout', {
            url: '/layout',
            templateUrl: 'form-layout.html'
        })
        
        // url will be /form/confirmations
        .state('form.confirmations', {
            url: '/confirmations',
            templateUrl: 'form-confirmations.html'
        })
		
		 // url will be /form/widget
        .state('form.widget', {
            url: '/widget',
            templateUrl: 'form-widget.html'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/welcome');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
	
	$scope.showButtons = function () {
        if($scope.formData.type == 'buy'){
			$scope.buyButtons = true;
			$scope.donateButtons = false;
		} 
		else{
			$scope.buyButtons = false;
			$scope.donateButtons = true;
		}
	}
	
	$scope.showVars = function () {
	alert( 'The variables to generate the widget code :' + JSON.stringify($scope.formData) );
	} 
    
});

// Activate button if field selected 
// =============================================================================

function activateBtnLayout() {
		document.getElementById("layoutNext").disabled = false;
        
    }
function activateBtnType() {
		document.getElementById("typeNext").disabled = false;
        
    }
function activateBtnConfirmations() {
		document.getElementById("confirmationsNext").disabled = false;
        
    }	
	

