const timeNow = () => {
  const day =new Date();
  const date1 = day.getFullYear();
  const date2 = day.getMonth();
  const date3 = day.getDate();
  const date4 = day.getHours();
  const date5 = day.getMinutes();
  const date6 = day.getSeconds();
  const date7 = day.getDay();

  let week;

  switch(date7) {
    case 0:
      week = '日曜日'
      break;

    case 1:
      week = '月曜日'
      break;

    case 2:
      week = '火曜日'
      break;

    case 3:
      week = '水曜日'
      break;

    case 4:
      week = '木曜日'
      break;  

    case 5:
      week = '金曜日'
      break;
  }

  console.log(date1 + '年',date2 + 1 + '月',date3 + '日',week,date4 + '時',date5 + '分',date6 + '秒');
}

timeNow();