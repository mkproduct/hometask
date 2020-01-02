
window.onload = function() {

    function showDate() {
        var date = document.querySelector('.date');
         var monthArr = [
             'January',
             'February',
             'March',
             'April',
             'May',
             'June',
             'July',
             'August',
             'September',
             'October',
             'November',
             'December'
         ];

        // day / month / year
        var day = new Date();
        day = day.getDate();
        var tmpDay;

        var month = new Date();
        month = month.getMonth();
        var tmpMonth;

        var year = new Date();
        year = year.getFullYear();

        // month to String
        switch (month) {
            case 0:
                month = monthArr[0];
                break;
            case 1:
                month = monthArr[1];
                break;
            case 2:
                month = monthArr[2];
                break;
            case 4:
                month = monthArr[4];
                break;
            case 5:
                month = monthArr[5];
                break;
            case 6:
                month = monthArr[6];
                break;
            case 7:
                month = monthArr[7];
                break;
            case 8:
                month = monthArr[8];
                break;
            case 9:
                month = monthArr[9];
                break;
            case 10:
                month = monthArr[10];
                break;
            case 11:
                month = monthArr[11];
                break;
        }

         /* 
        //  zero before day & month (01 - 09)
        if (day > 0 && day < 10 && month >= 0 && month < 10) {
           tmpDay = day;
           day = '0' + tmpDay; 

           tmpMonth = month;
           month = '0' + tmpMonth;
        } 
        */

        date.innerHTML = day + ' - ' + month + ' - ' + year;
    }
    showDate();
    
    
    function showDateTime() {
        setTimeout(function clearStack() {
            var time = document.querySelector('.time');
           
            // time
            var hour = new Date();
            var min = new Date();
            var second = new Date();
            
            time.innerHTML = hour.getHours() + ' : ' + min.getMinutes() + ' : ' + second.getSeconds();
            
            clearTimeout(clearStack);
            if (hour.getHours() === 0) {
                showDate();
            }
            showDateTime();
        }, 1000);

    }
    showDateTime()
}




