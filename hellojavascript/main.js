window.onload = function(){
    //document.write("Hello JavaScricpt")
}
$(function(){
    var arr=[]
    const imageURLArr = ["https://resources.matcha-jp.com/original/2018/05/24-54841.jpeg",
    "https://d3l76hx23vw40a.cloudfront.net/recipe/yqn093-027c.jpg",
    "https://banbi.tw/wp-content/uploads/20190509230042_82.jpg"]
    function reset(arr){
        console.log("reset")
        arr=['0','1','2']
        for(var i=0;i<arr.length;i++){
            var rnd=Math.floor(Math.random()*$("li").length)
            var tmp=arr[i]
            arr[i]=arr[rnd]
            arr[rnd]=tmp
        }
        console.log(arr)
        return arr
    }
    arr=reset(arr)

    $("input").on("click",function(){
    //alert("Hi");
    //$("h1").text($("li:first").text());//first item
    //$("h1").text($("li:last").text());//last item
    if(arr.length==0){
        arr=reset(arr)
    }
    $("p").text(arr);
    var randomChildNumber = arr.pop()
    console.log(randomChildNumber)
    $("h1").text($("li").eq(randomChildNumber).text());
    console.log(imageURLArr[randomChildNumber])
    $("img").attr("src",imageURLArr[randomChildNumber])

    //var numberOfListItem = $("li").length;
    //var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    //$("h1").text($("li").eq(randomChildNumber).text());
    });
    });