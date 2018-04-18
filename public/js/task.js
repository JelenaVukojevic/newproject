var myObj = {
    'property': 'value'
};

var array = [
    {
        'property1': 'value1'
    },
    {
        'property2': 'value2'
    },
    {
        'property3': 'value3'
    }
];

// es5

function Person(first_name, last_name, gender, age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;

    Person.instances[this.age] = this;
   
}

Person.instances = {};
Person.sayHello = function() {
    console.log('Hello!');
};

var Jelena = new Person('Jelena', 'Vukojevic', 'female', '25');

Person.prototype.getName = function() {
        return this.first_name + ' ' + this.last_name;
};


function Developer(first_name, last_name, gender, position) {
    Person.call(this, first_name, last_name, gender);
    this.position = position;
}

var Dev = new Developer('Jelena', 'Vukojevic', 'f', 'intern');


var needNewPhone = true;

var getNewPhone = new Promise(
    function (resolve, reject) {
        if (needNewPhone) {
            var newPhone = {
                brand: 'Huawei',
                color: 'white'
            };
        resolve(newPhone);    
        } else {
            var reason = new Error("Don't need new phone");
            reject(reason);
        }
    }
);

var checkPhone = function () {
    getNewPhone.then(function(fulfilled){
        console.log(fulfilled)
    })
    .catch(function (error) {
        console.log(error.message);
    })
}

// checkPhone();


function waitFiveSeconds () {
    setTimeout(function () {
        console.log('5 seconds passed');
    }, 5000);
}

waitFiveSeconds();