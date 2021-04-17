$(function(){
    updateTable();
});

$("input").change(function(){
    //console.log($(this).val())
    const date = new Date($(this).val())
    //console.log(date)
    setMonthAndDay(date.getMonth()+1,date.getDate());
    updateTable();
})

function updateTable(){
    $("#courseTable").empty();
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var milisecsPerDay = 24*60*60*1000;

    var topicCount = topic.length;
    for(var x=0;x<topicCount;x++){
        const date = new Date(startDate.getTime()+7*x*milisecsPerDay)
        var holiday = false;
        for(var i=0;i<breakDay.length;i++){
            //console.log(breakDay[i])
            if(breakDay[i].getMonth()==date.getMonth() && breakDay[i].getDate()==date.getDate()){
                holiday=true;
            }
            //console.log(holiday)
        }
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        if(holiday==true)
            $("#courseTable").append(`<td class='breakDay'>${(new Date(startDate.getTime()+7*x*milisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
        else
            $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*milisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
        $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
    }
}