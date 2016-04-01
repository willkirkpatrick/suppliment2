
var app = angular.module("myApp", []);

    app.controller("MyController", ["$scope", function($scope) { 
        $scope.Add = function(op1, op2) {
            console.log('inside add function');
            $scope.sum = 0;
            if (op1 ==="" || op2 === "") {
                alert("Both operands are required");
                $scope.op1 = "";
                $scope.op2 = "";
            } else {
                $scope.sum = op1 + op2;
                $scope.messages = "The result of adding " + op1 + " and "
                + op2 + " is " + $scope.sum;
                $scope.op1 = "";
                $scope.op2 = "";
            }
        }
        
        $scope.Subtract = function(op1, op2) {
            console.log('inside Subtract function');
            $scope.sum = 0;
            if (op1 ==="" || op2 === "") {
                alert("Both operands are required");
                $scope.op1 = "";
                $scope.op2 = "";
            } else {
                $scope.sum = op1 - op2;
                $scope.messages = "The result of subtracting " + op1 + " and "
                + op2 + " is " + $scope.sum;
                $scope.op1 = "";
                $scope.op2 = "";
            }
        }
        
        $scope.Multiply = function(op1, op2) {
            console.log('inside Multiply function');
            $scope.sum = 0;
            if (op1 ==="" || op2 === "") {
                alert("Both operands are required");
                $scope.op1 = "";
                $scope.op2 = "";
            } else {
                $scope.sum = op1 * op2;
                $scope.messages = "The result of multiplying " + op1 + " and "
                + op2 + " is " + $scope.sum;
                $scope.op1 = "";
                $scope.op2 = "";
            }
        }
        
        $scope.Divide = function(op1, op2) {
            console.log('inside Divide function');
            $scope.sum = 0;
            if ($scope.op1 === "" || $scope.op2 === "") {
                alert("Both operands are required");
                $scope.op1 = "";
                $scope.op2 = "";
            } else {
                if (op2 !== 0) {
                    $scope.sum = op1 / op2;
                    $scope.messages = "The result of dividing " + op1 + " by "
                    + op2 + " is " + $scope.sum;
                    $scope.op1 = "";
                    $scope.op2 = "";
                    
                } else {
                    alert("Division by zero could cause the universe to collapse");
                    $scope.op1 = "";
                    $scope.op2 = "";
                }
            }
        }
    }]);