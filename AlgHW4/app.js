//******************TASK*************** */
// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
// Массив 1 - 100 112 256 349 770
// Массив 2 - 72 86 113 119 265 445 892
// к = 7
// Вывод : 256
// Окончательный отсортированный массив -
// 72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892
// 7-й элемент этого массива равен 256.
 
function findElement(arr1, arr2, k) {
   const m = arr1.length;
   const n = arr2.length;
   let i = 0; // Указатель для массива arr1
   let j = 0; // Указатель для массива arr2
   let count = 0; // Счетчик для отслеживания текущей позиции
 
   while (i < m && j < n) {
     if (arr1[i] <= arr2[j]) {
       count++;
       if (count === k) {
         return arr1[i];
       }
       i++;
     } else {
       count++;
       if (count === k) {
         return arr2[j];
       }
       j++;
     }
   }
 
   // Если один из массивов закончился, продолжаем смотреть второй массив
   while (i < m) {
     count++;
     if (count === k) {
       return arr1[i];
     }
     i++;
   }
 
   while (j < n) {
     count++;
     if (count === k) {
       return arr2[j];
     }
     j++;
   }
 
   return -1; // Если k выходит за пределы массивов
 }

 const arr1 = [100, 112, 256, 349, 770];
 const arr2 = [72, 86, 113, 119, 265, 445, 892];
 const k = 7;
 
 const result = findElement(arr1, arr2, k);
 console.log(result); // Вывод: 256

 
 
 
 
 