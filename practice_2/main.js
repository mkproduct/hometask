/*
// для function expression важна точка с запятой в конце !
// note: дело в том что мы приваиваем функцию как значение в переменную поэтому нужно ( ; ) 

var test = function hi() {
    a = 5;
    b = 6;
    return ( 
        a + b
    )
} + ' тут может бҷт что угодно если стваить  точка с запятой';
    
console.log(test);

*/   





/*
если ис/т use strict
не возможно вызвать 
function decloration если его тело внутри какоето блока!

"use strict"

var age = prompt('your age');

if (age < 18) {
    function sayHi() {
        console.log('works');
    }
} else {
    function showMessege() {
        console.log('works');
    }
}

sayHi()

*/








/*
======================================================================================================================
Object

    методы создание объекта {
        var obj = new Object();
        var objL = {};
        console.log(obj);
    }

    обращение, добавление и оператор delete {

        var prop4 = 'don\'t worry';

        var user = {
            prop: 'something',
            prop2: 10,
            "third prop": 11,
        }


        // user.prop2 = 7;
        // user['third prop'] = 'write something';
        // user[prop4] = 10;

        // delete user['third prop']

        console.log(user);
        
    }

*/






/*
в объекте разрешени зарезервированные слова (исключая свойство __proto__) {
    var obj = {
        let: 2,
        return: 'carefully'
    }
    console.log(obj);
}
*/





/*
проверка существование свойств 
оператор in

    var obj = {
        name: 'AaA',
        age: 11,
    }
    console.log("age" in obj);
*/





/*
    Цикл for ... in

     var obj = {
         name: 'AaA',
         age: 11,
     }

     for (var key in obj) {
         console.log(key);
         // console.log(obj[key]);
     }

*/







/*
    Копирование по ссылке {
         var obj = {
             name: 'AaA',
         }
         var user = obj;

         user.name = 5

         console.log(obj, user);
    }
    

    clone / копирование

    c помощю цикла for ...in {
        var obj = {
            name: 'AaA',
            age: 31,
        }

        var user = {};

        for (var key in obj) {
            user[key] = obj[key];
        }

        obj.newValue = 'text';
        console.log(obj);
        console.log(user);
    }

    Object assign {

        var obj = {
            name: 'Mike',
        }

        var cloneMe = {
            prop: 5,
        }
        var cloneMe2 = {
            prop2: 31,
        }

        Object.assign(obj, cloneMe, cloneMe2);

        console.log(obj);

        более кароткий путь {

             var obj = {
                 name: 'Nike',
             }

             var clone = Object.assign({}, obj);

             console.log(clone === obj);


        }


    }


*/





/*
Методы объекта
    var obj = {
        func: function () {
            console.log('worked');
        },
        foo() {
            console.log('this is my home');
        },
    }

    obj.func();
    obj.foo();


*/




/*
переоброзование примитивам

    boolean {
        var obj = {
            name: 'Mike',
        }
        console.log(Boolean(obj));

        var user = {
            name: 'AaA',
        }
    }

    toString & valueOf {

        var obj = {
            name: '50',
            toString() {
                return obj.name;
            },

            valueOf() {
                return obj.name;
            }
        }

        alert(obj);
        // alert(obj - 15);
    }



*/





