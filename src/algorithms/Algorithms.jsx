const Algorithms = () => {
  let names = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 67, 23, 43, 5678, 121, 877, 654, 233, 12,
  ];

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
    </div>
  );
};
export default Algorithms;
