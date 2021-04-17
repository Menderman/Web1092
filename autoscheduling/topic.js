var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "條件判斷",
    "上課內容",
    "上課內容",
    "期中周",
    "上課內容",
    "上課內容",
    "上課內容",
    "上課內容",
    "上課內容",
    "上課內容",
    "上課內容",
    "上課內容",
    "期末周"
];

var breakDay = [
    new Date("2021-03-06"),
    new Date("2021-03-13"),
    new Date("2021-04-03"),
    new Date("2021-04-17"),
    new Date("2021-05-01"),
    new Date("2021-05-08"),
    new Date("2021-05-29"),
    new Date("2021-06-05"),
    new Date("2021-06-19")
]

var startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    //設定月份日期
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);