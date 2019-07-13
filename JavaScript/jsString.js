//Exercise1
/* var x = "hussain";
var len = x.length;
rev(x);

function rev(text) {

    for (var i = len; i >= 0; i--) {
        console.log(text[i]);
    }
}

//Exercise1
var a = '7654321';
revs(a);

function revs(n) {
    var l;
    var s = 0;
    while (n) {
        l = n % 10;
        s = (s * 10) + l;
        n = n / 10 | 0;
    }
    console.log(s);
    return s;
}

//Exercise2
var str = "hussain";
var arr = str.split('');
var temp;
len = arr.length;
for (var i = 0; i < len; i++) {
    for (var j = 1; j < len; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
var ar = arr.join('');
console.log(ar);

//Exercise3
var sntc = "prInce of persia";
var ary = sntc.split('');
//console.log(ary);
len = ary.length;
//console.log(sntc);
//console.log(len);
for (var i = 0; i < len; i++) {
    if (i == 0) {
        ary[i] = ary[i].toUpperCase();
        //console.log(ary[i]);
    } else if (ary[i] != " ") {
        ary[i] = ary[i].toLowerCase();

    } else if (ary[i] == " ") {

        i = i + 1;
        ary[i] = ary[i].toUpperCase();
    }
}
var newar = ary.join('');
console.log(newar);*/

//Exercise4
var strg = "Web Development Tutorial";
var are = strg.split('');
//console.log(are);
len = are.length;
//console.log(len);
var count = 0;
var max = 0;
var maxword =new Array();
var final =new Array();
var j=0;
for(var i=0; i < len; i++){
    if(are[i]==" "){
        if(max < count){
            max=count;
            final=maxword;
            var finare=final.join('');
            //console.log(final);
        }
        
        count=0;
        j=0;
        }
    else{
    maxword[j++]=are[i];
    count++;        
}
    //console.log(maxword);
}
if(max < count){
            max=count;
            final=maxword;
            var finare=final.join('');
            //console.log(final);
        }

console.log(finare);

//Exercise1
var a = '7654321';
revs(a);

function revs(n) {
    var l;
    var s = 0;
    while (n) {
        l = n % 10;
        s = (s * 10) + l;
        n = n / 10 | 0;
    }
    console.log(s);
    return s;
}
