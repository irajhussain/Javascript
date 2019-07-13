//Exercise 1
var names = ["Iraj", "Lini", "Lumila", "Ottavia", "Lukas"];
names.sort();
console.log(names[0], names[4]);
var i;
var len = names.length;
for (i = 0; i < len; i++) {
    console.log(names[i]);
}

//Exercise 2
var age = [29, 28, 30, 26, 25];
age.sort();
var lent = age.length;
var j = 0;
while (j < lent) {
    console.log(age[j]);
    j++;
}
var j = 0;
while (j < lent) {
    if (age[j] % 2 == 0) {
        console.log(age[j]);
    }
    j++;
}
for (i = 0; i < lent; i++) {
    console.log(age[i]);
}
for (i = 0; i < lent; i++) {
    if (age[i] % 2 == 0) {
        console.log(age[i]);
    }
}

function myFunction(p1, p2, p3) {
    return p1 * p2 * p3;
}
var x = myFunction(5, 3, 3);
console.log(x);

//Exercise 3
var arr = [7, 2, 3, 1, 1, 0, -1];
var len = arr.length;
lowest(arr);
/*console.log(len);*/
function lowest(param) {
    var min = param[0];
    for (var i = 1; i < len; i++) {
        if (min > param[i]) {
            min = param[i];
        }
    }
    console.log(min);
}

//Exercise 4
var ary = [7, 2, 9, 1, 1, 0, -1];
var len = arr.length;
larg(ary);
/*console.log(len);*/
function larg(param) {
    var max = param[0];
    for (var i = 1; i < len; i++) {
        if (max < param[i]) {
            max = param[i];
        }
    }
    console.log(max);
}

//Exercise 5
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;
loc(array, index);

function loc(ar, pm) {
    console.log(ar[pm]);
}

//Exercise 6
var ar = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100, 6];
var len = ar.length;
equal(ar);
/*console.log(len);*/
function equal(par) {
    for (var j = 0; j < len; j++) {
        var i = j + 1;
        /*console.log(par[j]);*/
        while (i < len) {
            if (par[j] == par[i]) {
                console.log(par[j]);

            }
            i++;
        }

    }
}

//Exercise 7
var myColor = ["Red", "Green", "White", "Black"];
console.log('"' + myColor[0] + '", "' + myColor[1] + '", "' + myColor[2] + '", "' + myColor[3] + '"');
var len = myColor.length;
var concat = '';
for (var i = 0; i < len; i++) {
    concat = '"' + myColor[i] + '", ';
    console.log(concat);
}
