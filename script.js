var todaysdate = moment().format('dddd MMMM Do YYYY')
$('#currentDay').html(todaysdate)
$(document).ready(function(){
function tracktime(){
    var now = moment().hour()
    $('.time-block').each(function(){
    var time =parseInt($(this).attr('id').split('-')[1])
    if (time<now){
        $(this).removeClass('future')
        $(this).removeClass('present')
        $(this).addClass('past')

    }

    else if (time==now){
        $(this).addClass('present')
        $(this).removeClass('future')
        $(this).removeClass('past')  
    }

    else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }


    })
}  
$('.saveBtn').on('click',function(){
    var text=$(this).siblings('.description').val()
    var time=$(this).parent().attr('id')
    localStorage.setItem(time,text)
})
$('#hour-8 .description').val(localStorage.getItem('hour-8'))
$('#hour-9 .description').val(localStorage.getItem('hour-9'))





tracktime()  
})