var age = +prompt('Введите свой возраст')


    if ((age) > 0  && (age) <= 18) {
        console.log(alert('Вы еще молоды, Вам нужно учится'));
    }
    else if ((age) > 18 && (age) <= 50) {
        console.log(alert('Вам нужно работать.'));
    }   else if ((age) > 50 && (age) <= 59) {
        console.log(alert('Вам скоро  на пенсию.'));
    }   else if ((age) > 59 && (age) <= 100) {
        console.log(alert('Вы пенсионер.'));
    }else{
        console.log(alert('Что то произошло не так '));
        
    }

