var button = document.getElementsByClassName('button');
var sumOfAlerts='';
for (var i = 0 ; i < button.length ; i++) {
    alert(button[i].innerText);
    sumOfAlerts = sumOfAlerts + button[i].innerText +' ';
}
alert(sumOfAlerts);