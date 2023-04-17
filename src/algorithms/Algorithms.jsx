const Algorithms = () => {
  let names = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 67, 23, 43, 5678, 121, 877, 654, 233, 12,
  ];

  //   function binarySearch(arr, item) {
  //     let low = 0;
  //     let high = arr.length - 1;
  //     while (low <= high) {
  //       let mid = Number((low + high) / 2);
  //       let guess = arr[mid];
  //       if (guess === item) {
  //         return console.log(mid);
  //       } else if (guess > item) {
  //         high = mid - 1;
  //       } else {
  //         low = mid + 1;
  //       }
  //       return null;
  //     }
  //   }
  function search(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        return console.log(`found item : ${arr[i]} // index:${i}`);
      }
    }
    return console.log("Not found");
  }
  search(names, 877);
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
    </div>
  );
};
export default Algorithms;
