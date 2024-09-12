$(".cat-search>button").click(search)

$(".cat-search>input").keydown(function(event){
    if(event.key === "Enter"){
        search()
    }
})


function search (){
    console.log("111")
    var val = $(".cat-search>input").val()
    val = val.toLowerCase()

    $(".product-list>h3").each(function(){
        let card = $(this).closest('.product-item');
        let text = $(this).text();
        text = text.toLowerCase()
        text.includes(val)? card.show() : card.hide();
    })
}

var chekMark = $(".check>div>img")

$(document).ready(function(){
    chekMark.hide()
    $(".check>div").click(function(){
        chekMark.toggle()
    })
})