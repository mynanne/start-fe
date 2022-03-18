function Create(_list, _input) {
    _list.push(_input);
}

function Read(_list) {
    var text = "[";
    _list.forEach(value => text += value + " , ")
    console.log(text + "]");
}

function Update(_list, _beforeValue, _afterValue) {
    var index = _list.findIndex(value => value == _beforeValue);
    _list[index] = _afterValue;
}

function Delete(_list, _value) {
    var index = _list.findIndex(value => value == value);
    _list.splice(index, 1)
}

var list = [2, 5, 8];
Create(list, 3);
Read(list);

Update(list, 5, 4);
Read(list);

Delete(list, 8);
Read(list);