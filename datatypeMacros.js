function Macro(Name,Icon,Key,Arity,Function){
//Normal Macro using javascript typing
return [Name,Icon,Key,Arity,Function];
}
//Turn a number into utf-8
var Char8_Macro=Macro("Char8","Char8.jpg","C",1,function (x){return String.fromCharCode(x)});

//Newly Implemented

//Newly Implemented

var StringToHex_Macro = Macro("String to Hexadecimal", "StringToHex.jpg", "H", 1, function (str) {
    return str.split('').map(function (char) {
        return char.charCodeAt(0).toString(16);
    }).join('');
});

var HexToString_Macro = Macro("Hexadecimal to String", "HexToString.jpg", "I", 1, function (hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
});

var IntToUTF8_Macro = Macro("Large Integer to UTF-8", "IntToUTF8.jpg", "U", 1, function (integer) {
    var str = '';
    while (integer > 0) {
        str = String.fromCodePoint(integer & 0x3FF | 0x80) + str;
        integer >>= 10;
    }
    return str;
});

var IntToBytes_Macro = Macro("Large Integer to Bytes", "IntToBytes.jpg", "B", 1, function (integer) {
    return String.fromCharCode((integer >> 24) & 0xFF, (integer >> 16) & 0xFF, (integer >> 8) & 0xFF, integer & 0xFF);
});

var IntToASCII_Macro = Macro("Large Integer to ASCII String", "IntToASCII.jpg", "A", 1, function (integer) {
    var asciiString = '';
    while (integer > 0) {
        asciiString = String.fromCharCode(integer % 128) + asciiString;
        integer = Math.floor(integer / 128);
    }
    return asciiString;
});

var StringToBase64_Macro = Macro("String to Base64", "StringToBase64.jpg", "S", 1, function (str) {
    return btoa(str);
});

var Base64ToString_Macro = Macro("Base64 to String", "Base64ToString.jpg", "T", 1, function (base64) {
    return atob(base64);
});



let datatype_macros=["Datatypes","Datatypes.jpg",[Char8_Macro,HexToString_Macro,StringToHex_Macro,IntToUTF8_Macro,IntToBytes_Macro,IntToASCII_Macro,StringToBase64_Macro,Base64ToString_Macro]];
