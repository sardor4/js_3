var x = +prompt('Введите первое число');
var y = +prompt('Введите второе число');
var z = +prompt('Введите третье число');
if (x < y && x < z){
    alert(x + ' меньше чем ' + y + ' и ' + x + ' меньше чем ' + z +'. Наименьшее число: '+ x);
} else if (y < x && y < z){
    alert(y + ' меньше чем ' + x + ' и ' + y + ' меньше чем ' + z +'. Наименьшее число: '+ y);
} else if (z < y && z < x){
    alert(z + ' меньше чем ' + y + ' и ' + z + ' меньше чем ' + x +'. Наименьшее число: '+ z);
} else if (x == y == z){
    alert('Все цифры равны');
}