function format(inputDate) {
    let date, month, year;
  
    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();
  
      date = date
          .toString()
          .padStart(2, '0');
  
      month = month
          .toString()
          .padStart(2, '0');
  
    return `${date}/${month}/${year}`;
  }
  
  const result = format(new Date('2022', '2', '28'));
  
  console.log(result); // 28/03/2022