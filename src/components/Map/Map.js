// set(key, value): Добавляет новый элемент с указанным ключом и значением в Map.
// get(key): Возвращает значение, связанное с указанным ключом.
// has(key): Проверяет наличие элемента с указанным ключом в Map.
// delete(key): Удаляет элемент с указанным ключом из Map.
// clear(): Удаляет все элементы из Map.
// size: Свойство, возвращающее текущее количество элементов в Map.

// Создание нового экземпляра Map
let myMap = new Map();

// Добавление элементов в Map
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

// Получение значения по ключу
console.log(myMap.get("key2")); // Выводит: 'value2'

// Проверка наличия элемента
console.log(myMap.has("key3")); // Выводит: true

// Удаление элемента
myMap.delete("key1");

// Итерация по Map
myMap.forEach((value, key) => {
  console.log(key + " = " + value);
});
