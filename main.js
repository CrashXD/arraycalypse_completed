let users = ['Isabella', 'Lucas', 'Sophia', 'Noah', 'Ava', 'Ethan', 'Emma', 'Liam', 'Olivia', 'Mason'];
let names = ['Ethan', 'Lucas', 'Charlotte', 'Logan', 'Mia', 'Emma', 'Amelia', 'Jackson', 'Harper', 'Olivia'];
let students = ['Ava', 'Mia', 'Jax', 'Zoe'];

console.log("%c1:", "font-size: 16px; color: red;");

/**
 * 1. Функция, которая оставляет в массиве только первые n элементов  
 */
function cutArray(array = [], length = 0) {
    /*
        делаем вырезку из массива от начала
        до символа с индексом равным нужной длине
        и ее же возвращаем
    */
    return array.slice(0, length);
}

function cutArray2(array = [], length = 0) {
    /*
        фильтруем массив
        если индекс меньше переданной длины - элемент оставляем
    */
    return array.filter(function (_, index) {
        return index < length;
    });
}

function cutArray3(array = [], length = 0) {
    /*
        собираем новый массив как аккумуляцию из исходного массива
    */
    return array.reduce(function (newArray, item, index) {
        if (index < length) newArray.push(item);
        return newArray;
    }, []);
}

function cutArray4(array = [], length = 0) {
    /*
        делаем копию исходного массива
        и на нем вырезаем элементы от начала массива
        в количестве, переданном в параметре длина
    */
    return array.slice().splice(0, length);
}

function cutArray5(array = [], length = 0) {
    /*
        делаем копию исходного массива и объявляем пустой массив
        пока размер нового массива меньше чем переданный параметр
        будет работать цикл, в котором в новый массив на каждой итерации
        вставляется в конец элемент, взятый из начала копии исходного
        если вдруг в копии не останется больше элементов
        выходим из цикла
    */
    let newArray = [], temp = array.slice();
    while (newArray.length < length) {
        newArray.push(temp.shift());
        if (!temp.length) break;
    }
    return newArray;
}

console.log(cutArray(users, 5));
console.log(cutArray2(users, 5));
console.log(cutArray3(users, 5));
console.log(cutArray4(users, 5));
console.log(cutArray5(users, 5));

console.log("%c2:", "font-size: 16px; color: red;");

/**
 * 2. Функция, которая удаляет из массива каждый второй элемент  
 */
function thanosSnap(array = []) {
    /*
        фильтруем массив
        у подходящих элементов должен быть четный индекс
        поэтому делим индекс на 2 c остатком
        если есть остаток - значит число нечетное
        поэтому нужно инвертировать результат через отрицание !
        чтобы на четных числах возвращался true и они оставались в массиве
    */
    return array.filter(function (_, index) {
        return !(index % 2);
    });
}

function thanosSnap2(array = []) {
    /*
        создаем счетчик и пустой массив
        для каждого элемента исходного массива запускаем функцию,
        в которой проверяем счетчик
        если в счетчике ноль, то добавляем элемент и инкрементируем счетчик
        если в счетчике один, то пропускаем элемент и декрементируем счетчик
        возвращаем получившийся массив
    */
    let i = 0, newArray = [];
    array.forEach(function (item) {
        if (!i) {
            newArray.push(item);
            i++;
        } else {
            i--;
        }
    });
    return newArray;
}

function thanosSnap3(array = []) {
    /*
        используем аккамулирующий метод для сбора нового массива
        в массив добавляем элемент если его индекс нечетный
    */
    return array.reduce(function (newArray, item, index) {
        if (!(index % 2))
            return newArray.concat(item);
        return newArray;
    }, []);
}

function thanosSnap4(array = []) {
    /*
        на основе исходного массива получаем новый,
        в котором каждый второй элемент заменяем на undefined
        после чего фильтруем полученный массив,
        если в элементе есть значение, то оставляем его
    */
    return array.map(function (item, index) {
        return !(index % 2) ? item : undefined;
    }).filter(item => item);
}

function thanosSnap5(array = []) {
    /*
        создаем копию исходного массива и новый пустой массив,
        куда добавим индексы элементов, которые нужно удалить
        циклом с шагом в 2 добавляем четные индексы в массив
        по перевернутому получившемуся массиву пробегаемся
        и удаляем из копии исходного массива элементы с этими индексами
    */
    let temp = array.slice(), indexForDelete = [];
    for (let i = 1; i < temp.length; i+=2) {
        indexForDelete.push(i);
    }
    indexForDelete.reverse().forEach(function (index) {
        temp.splice(index, 1);
    });
    return temp;
    
}

console.log(thanosSnap(users));
console.log(thanosSnap2(users));
console.log(thanosSnap3(users));
console.log(thanosSnap4(users));
console.log(thanosSnap5(users));

console.log("%c3:", "font-size: 16px; color: red;");

/**
 * 3. Функция, которая удаляет из массива элементы,
 * длина текста которых длинее переданного числа  
*/
function validateLength(array = [], maxLength = 0) {
    /*
        фильтруем массив
        если длина слова меньше или равна переданной длине
        значит этот элемент нужно оставить в массиве
        иначе вернется false и элемента в итоговом массиве не будет
    */
    return array.filter(function (item) {
        return item.length <= maxLength;
    });
}

function validateLength2(array = [], maxLength = 0) {
    /*
        проходим по массиву и получаем новый массив на его основе,
        в котором элементы с текстом больше переданного значения
        заменяются на undefined
        а затем фильтруем получившийся массив
        если в элементе есть значение, оставляем его
    */
    return array.map(function (item) {
        return item.length <= maxLength ? item : undefined;
    }).filter(item => item);
}

function validateLength3(array = [], maxLength = 0) {
    /*
        создаем внутри функции еще одну функцию,
        которая возвращает индекс элемента с текстом,
        длинее переданного в параметре
        затем на копии исходного массива
        в бесконечном цикле ищем индексы элементов
        с длинным текстом, используя эту функцию
        если элемент найден, то удаляем его и ищем следующий
        если больше элементов нет, выходим из цикла
        и возвращаем получившийся массив
    */
    function findLongElement(array = []) {
        return array.findIndex(function (item) {
            return item.length > maxLength;
        });
    }
    
    let newArray = array.slice();
    while(true) {
        let index = findLongElement(newArray, maxLength);
        if (index === -1) break;
        newArray.splice(index, 1);
    }
    return newArray;
}

function validateLength4(array = [], maxLength = 0) {
    /*
        создаем копию массива и пустую строку
        в пустую строку добавляем столько одинаковых символов,
        сколько было передано в параметре
        затем создаем новый массив на основе каждого элемента
        исходного массива, заменяя все буквы на один и тот же символ
        затем через накопительный цикл собираем новый массив
        из индексов элементов строка которых больше, чем максимально возможная
        переворачиваем массив индексов и пробегаемся по нему
        на каждой итерации удаляя из копии исходного массива
        элемент с таким индексом
    */
    let reference = "", newArray = array.slice();
    for (let i = 0; i < maxLength; i++) {
        reference += "a";
    }
    array.map(function (item) {
        return item.split("").map(() => "a").join("");
    }).reduce(function (indexes, item, index) {
        return item > reference ? indexes.concat(index) : indexes;
    }, []).reverse().forEach(function (index) {
        newArray.splice(index, 1);
    });
    return newArray;
}

function validateLength5(array = [], maxLength = 0) {
    /*
        на основе исходного массива создаем массив-маску,
        которая показывает элементы, с длиной текста больше переданной
        затем собираем новый массив, используя аккумулирующий метод
        если в массиве-маске элемент под текущим индексом равен true,
        то пропускаем его
        остальные добавляем в аккумулятор и возвращаем его
    */
    let mask = array.map(function (item) {
        return item.length > maxLength;
    });
    return array.reduce(function (newArray, item, index) {
        let wrongElement = mask[index];
        if (!wrongElement) newArray.push(item);
        return newArray;
    }, []);
}

console.log(validateLength(users, 4));
console.log(validateLength2(users, 4));
console.log(validateLength3(users, 4));
console.log(validateLength4(users, 4));
console.log(validateLength5(users, 4));

console.log("%c4:", "font-size: 16px; color: red;");

/**
 * 4. Функция, которая сравнивает два массива
 * и возвращает новый массив, содержащий элементы,
 * которые есть и в первом, и во втором массиве одновременно
 */
function compareElements(firstArray = [], secondArray = []) {
    /*
        фильтруем любой из массивов
        если элемент этого массива есть в другом массиве
        то возвращаем true - и элемент останется в массиве
        затем еще одна фильтрация, чтобы оставить каждый элемент
        только один раз
        для этого ищем индекс первого элемента с таким же значением
        если текущий индекс равен найденому, то оставляем элемент
    */
    return firstArray.filter(function (item) {
        return secondArray.includes(item);
    }).filter(function (item, index, array) {
        return array.indexOf(item) === index;
    });
}

function compareElements2(firstArray = [], secondArray = []) {
    /*
        фильтруем первый массив, чтобы каждый элемент был только один раз
        затем создаем массив с индексами элементов,
        которые есть во втором массиве
        и по массиву с индексами создаем массив с элементами
    */
    firstArray = firstArray.filter(
        (item, index, array) => array.indexOf(item) === index
    );
    let indexes = firstArray.map(function (item) {
        return secondArray.indexOf(item);
    }).filter(item => item !== -1);
    return indexes.map(
        index => secondArray[index]
    );
}

function compareElements3(firstArray = [], secondArray = []) {
    /*
        создаем массив содержащий элементы с обоих массивов
        оставляем в нем только те, которые есть
        одновременно в обоих массивах
        чтобы каждый элемент остался в массиве только один раз
        собираем новый массив, добавляя элемент, если его еще не было
    */
    let unitedArray = [].concat(firstArray, secondArray);
    unitedArray = unitedArray.filter(function (item) {
        return firstArray.includes(item) && secondArray.includes(item);
    });
    return unitedArray.reduce(function (newArray, item) {
        if (!newArray.includes(item)) newArray.push(item);
        return newArray;
    }, []);
}

function compareElements4(firstArray = [], secondArray = []) {
    /*
        создаем новый пустой массив
        перебераем все элементы первого массива
        внутри перебераем все элементы второго массива
        если встречаются одинаковые элементы
        то перебираем все элементы нового массива
        если в нем нет такого элемента, добавляем его
    */
    let newArray = [];
    firstArray.forEach(function (item) {
        secondArray.forEach(function (subitem) {
            if (item == subitem) {
                let hasElement = false;
                newArray.forEach(function (subsubitem) {
                    if (item == subsubitem && subitem == subsubitem)
                        hasElement = true;
                });
                if (!hasElement)
                    newArray[newArray.length] = item;
            }
        });
    });
    return newArray;
}

function compareElements5(firstArray = [], secondArray = []) {
    /*
        создаем копию исходного массива
        создаем цикл со счетчиком от нулевого элемента
        до текущей длины копии
        ищем такой же элемент в этом же массиве
        если есть еще один элемент где-то позже,
        то удаляем его
        дальше проверяем если такого элемента нет во втором массиве
        то удаляем его из копии
    */
    let temp = firstArray.slice();
    for (let i = 0; i < temp.length; i++) {
        let lastIndex = temp.lastIndexOf(temp[i]);
        if (i !== lastIndex)
            temp.splice(lastIndex, 1);
        if (secondArray.indexOf(temp[i]) === -1) {
            temp.splice(i, 1);
            i--;
        }
    }
    return temp;
}

console.log(compareElements(users, names));
console.log(compareElements2(users, names));
console.log(compareElements3(users, names));
console.log(compareElements4(users, names));
console.log(compareElements5(users, names));

console.log("%c5:", "font-size: 16px; color: red;");

/**
 * 5. Функция, которая изменяет порядок букв
 * в тексте каждого элемента и порядок самих
 * элементов на обратный
 */
function flipFlop(array = []) {
    /*
        делаем копию исходного массива,
        чтобы при перевороте порядка элементов
        не перезаписать его
        переворачиваем порядок элементов
        и для каждого элемента этого массива выполняем функцию
        возвращающую измененную строку
        в функции делим строку на массив из букв
        переворачиваем порядок букв
        и склеиваем буквы снова в одну строку
    */
    return array.slice().reverse().map(function (item) {
        return item.split('').reverse().join('');
    });
}

function flipFlop2(array = []) {
    /*
        создаем новый пустой массив
        проходим по каждому элементу исходного массива
        для каждого элемента создаем новую пустую строку
        создаем цикл, с помощью которого берем каждый символ строки
        и добавляем ее в начало новой строки
        затем получившуюся строку вставляем в начало массива
    */
    let newArray = [];
    array.forEach(function (item) {
        let newItem = "";
        for(let i = 0; i < item.length; i++) {
            newItem = item[i] + newItem;
        }
        newArray.unshift(newItem);
    });
    return newArray;
}

function flipFlop3(array = []) {
    /*
        создаем еще одну функцию внутри функции
        эту функция переворачивает порядок элементов,
        используя reduce
        начальное значение аккумулятора равно исходному массиву
        затем для каждого элемента проверяется:
        если индекс находится в первой половине массива
        то берем этот элемент и находим зеркальный ему с конца
        меняем их местами
        запускаем эту функцию на массиве
        и на полученном массиве запускаем map,
        в котором снова вызываем эту функцию,
        только теперь уже для массива символов текста
    */
    function reverse([...array] = []) {
        return array.reduce(function (array, item, index) {
            if (index < array.length / 2) {
                let tempElement = array[array.length - 1 - index];
                array[array.length - 1 - index] = item;
                array[index] = tempElement;
            }
            return array;
        }, array);
    }

    return reverse(array).map(function (item) {
        return reverse(item.split("")).join("");
    });
}

function flipFlop4(array = []) {
    /*
        находим длину самого длинного слова
        перебираем все элементы массива через цикл со счетчиком
        внутри запускаем цикл на убывание,
        от самой большой длины до нуля
        создаем новую строку, в которую добавляем символ
        если он был в исходной строке
        затем добавляем новый элемент в начало массива через splice
    */
    let longestElement = 0, newArray = [];
    array.forEach(function (item) {
        if (item.length > longestElement)
            longestElement = item.length;
    });
    for (let i = 0; i < array.length; i++) {
        let newStr = "";
        for (let j = longestElement; j >= 0; j--)
            if (array[i][j] !== undefined)
                newStr = newStr + array[i][j];
        newArray.splice(0, 0, newStr);
    }
    return newArray;
}

function flipFlop5(array = []) {
    /*
        собираем новый массив, через reduce
        сама строка разбивается через оператор расширения
        и собирается в массив,
        на который также вызывается reduce,
        в котором аккумулируем новую строку,
        добавляя символы в начало строки
        затем полученную строку размещаем в начало
        аккумулируемого массива через concat
    */
    return array.reduce(function (newArray, item) {
        item = [...item].reduce(function (newStr, symbol) {
            return symbol + newStr;
        }, '');
        return [].concat(item, newArray);
    }, []);
}

console.log(flipFlop(students));;
console.log(flipFlop2(students));;
console.log(flipFlop3(students));;
console.log(flipFlop4(students));;
console.log(flipFlop5(students));;
