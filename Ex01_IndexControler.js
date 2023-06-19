var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope){
    // $scope.[Tên biến] =[Giá trị]
    $scope.cars=[
        {brand:'Vinfast', model:'VF-E34',picture: 'Car.jpg',Price: 2700},
        {brand:'Toyota', model:'Camry',picture: 'Car.jpg' ,Price: 6700},
        {brand:'Mazda', model:'Cx5', picture: 'Car.jpg',Price: 2700},
        ];

// $scope.[tên hàm] = funtion(){};

// Sắp xếp
//1. Khai báo đối tượng sắp xếp
$scope.sapxep ={};
//2. Khai báo hàm hamsapxep(cot)
// car_database    

$scope.hamsapxep = function(cot){
    //2.1. Khai bao bien
var sapxep = $scope.sapxep;
    // 2.2. Kiểm tra sapxep.cot == cot?
if(sapxep.cot == cot){
    sapxep.descending =!sapxep.descending;
    // => Đảo chiều sapxep sapxep.descending
}else{
    // 2.3. Ngược lại
    // => Gán sapxep.cot == cot
    sapxep.cot = cot;
    //=> Khóa sapxep.descending = false
    sapxep.descending=false;
}


}; //End ham sapxep
}); //End Controller

