alphabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
function convert(){
    var x = document.getElementById("pt")
    var k = document.getElementById("key").value;
    var s = x.value.toLowerCase();
    var cip = document.getElementById("ciphers").value;
    console.log(cip);
    var res = "";
    str = []
    if(cip=="Caesar"){
        k = k|0;
        for(i=0; i<s.length; i++){
            str.push(s.charCodeAt(i)-97);
            p = (((str[i]|0+k|0)/26) | 0);
            res +=  String.fromCharCode((str[i]+k - p*26)+97);
        }
    }
    if(cip=="Vigenere"){
        var key = "";
        for(i=0; i<s.length; i++){
            str.push(s.charCodeAt(i)-97);
            p = (((str[i]|0)+((k.charCodeAt(i%k.length)-97)|0))/26)|0;
            res +=  String.fromCharCode(((str[i]|0)+((k.charCodeAt(i%k.length)-97)|0) - p*26)+97);
        }
    }
    var r = document.getElementById("ct");
    r.textContent = res;
}
