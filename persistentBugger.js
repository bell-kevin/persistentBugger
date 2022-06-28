function persistence(num) {
   if (num.length <= 1) return 0;
   
   let count = 0;
   let number = num.toString();
      
   while (number.length > 1) {
     let numArr = number.split("").map(item => Number(item));
     let newNum = 1;
     for (let item of numArr) {
       newNum *= item;
     }
     number = newNum.toString();
     count++;
   }
   return count;
}
