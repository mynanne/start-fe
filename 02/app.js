//String
var nick = "my nick is 'fe'";
var homepage = 'www.kakaocorp.com';

//Boolean
var isMan = true;
console.log(nick == '');
console.log(!!'test');

//Function
var log = function(str) {
    console.log(str);
};
function log(str) {
    console.log(str);
}

//Object
var image = {};
image.width = 1;
image.height = 2;
image['width'] = 1;
image['name' + 1] = '1.jpg';
image = {width: 1, height: 2 };

//Array
image = [];
image[0] = '1.jpg';
image[1] = '2.jpg';
image = ['1.jpg', 2, {name: '3.jpg'}];

//null
var nick = null;

//undefined
var nick;

//+
console.log(1 + 2);
console.log('a' + 'b');
console.log(1 + '4');

//동등, 일치
'' == '0';
0 == '';
0 == '0';
false == 'false';
false == '0';
false == undefined;
false == null;
null == undefined;
' \t\r\n' == 0;

//논리곱
if (isHero && isHulk) {

}
