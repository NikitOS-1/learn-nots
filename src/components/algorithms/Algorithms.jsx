import { useEffect, useState } from "react";

const Algorithms = () => {
  // Number
  // String
  // Boolean
  // Symbol
  // Object
  //   Array
  //   Function
  //   Date
  //   RegExp
  // null
  // undefined

  // function sort(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let x = 0; x < arr.length; x++) {
  //       if (arr[x + 1] < arr[x]) {
  //         let minNum = arr[x + 1];
  //         arr[x + 1] = arr[x];
  //         arr[x] = minNum;
  //       }
  //     }
  //   }
  //   return arr;
  // }

  // -------------recurse--------------
  // let arr = [[2, 2, 3, [1, 2, [1]]], 1, [12, [1, 3]]];

  // let newArray = [];

  // const flat = (array) => {
  //   array.forEach((el) => {
  //     if (Array.isArray(el)) {
  //       flat(el);
  //     } else {
  //       newArray.push(el);
  //     }
  //   });
  //   return newArray;
  // };

  // console.log(flat(arr).reduce((acc, el) => acc + el, 0));
  // let arr = [1, 3, 5, 2, 8, 9, 6, 4];

  // -------------sort--------------
  // const sortArray = (array) => {
  //   let sortArr = array;
  //   for (let i = 0; i < sortArr.length; i++) {
  //     for (let x = 0; x < sortArr.length; x++) {
  //       if (sortArr[x + 1] < sortArr[x]) {
  //         let minNumber = sortArr[x + 1];
  //         sortArr[x + 1] = sortArr[x];
  //         sortArr[x] = minNumber;
  //       }
  //     }
  //   }
  //   return sortArr;
  // };
  // console.log(sortArray(arr))
  return (
    <div>
      <div>
        <p>
          Бинарный алгоритм - суть в том что бы всегда начинать поиск с середины
          Логарифмы log10 100 = 2. Логарифм — операция, обратная возведению в
          степень . Бинарный поиск работает только в том случае, если список
          отсортирован. Бинарный поиск работает намного быстрее простого. •
          Время выполнения O(log n) быстрее O(n), а с увеличением размера
          списка, в котором ищется значение, оно становится намного быстрее. •
          Скорость алгоритмов не измеряется в секундах. • Время выполнения
          алгоритма описывается ростом количества операций. • Время выполнения
          алгоритмов выражается как «O-большое».
        </p>
      </div>
      <div>
        <p>
          Сортировка • Память компьютера напоминает огромный шкаф с ящиками. •
          Если вам потребуется сохранить набор элементов, воспользуйтесь
          массивом или списком. • В массиве все элементы хранятся в памяти рядом
          друг с другом. • В списке элементы распределяются в произвольных
          местах памяти, при этом в одном элементе хранится адрес следующего
          элемента. • Массивы обеспечивают быстрое чтение. • Списки обеспечивают
          быструю вставку и выполнение. • Все элементы массива должны быть
          однотипными (только целые числа, только вещественные числа и т.д.).
        </p>
      </div>
      <div>
        <p>
          Рекурсия • Когда функция вызывает саму себя, это называется рекурсией.
          • В каждой рекурсивной функции должно быть два случая: базовый и
          рекурсивный. • Стек поддерживает две операции: занесение и извлечение
          элементов. • Все вызовы функций сохраняются в стеке вызовов. • Если
          стек вызовов станет очень большим, он займет слишком много памяти.
        </p>
      </div>
      <div>
        <p>Быстрая сортировка</p>
      </div>
    </div>
  );
};
export default Algorithms;
