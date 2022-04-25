var mounthList = [
                  ,"דצמבר"
                  ,"נובמבר"
                  ,"אוקטובר"
                  ,"ספטמבר"
                  ,"אוגוסט"
                  ,"יולי"
                  ,"יוני"
                  ,"אפריל"
                  ,"מרץ"
                  ,"פבואר"
                  ,"ינואר"].reverse()
      
var date = new Date;
var year = date.getFullYear();

var mounth = date.getMonth();

var dayInMounth = date.getDate();

document.getElementById("eventYear").textContent = getYear();
initializeDays();


function getYear(){
    return mounthList[mounth] + " " + year;
}

function getDaysInMounth(year,mounth){
    return new Date(year,mounth,0);
}

function initializeDays(){
    var normalizeDay = dayInMounth%7;
    var firstDay = date.getDay() - normalizeDay + 1;
    var daysInMounth = getDaysInMounth(year,mounth+1).getDate();
    
    if(firstDay < 0){
        firstDay = firstDay + 7;
    }
    
    for(let idx = 1; idx < daysInMounth+1; idx++, firstDay++ ){
        document.getElementById("date"+firstDay).textContent = idx;
    }
    
}