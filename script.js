function time(){
    var today = dayjs();
    $("#currentDay").text(today.format('MMM DD, YYYY h:mm:ss A'))
    
}
setInterval(time, 1000)

var currentHour = dayjs().hour();
// var textContent = $("#text");
// // get this from local storage
var todos = {};
function render() {
    
    if(localStorage.getItem("data-hour")){
        todos = JSON.parse(localStorage.getItem("data-hour"))
    }
    for (var i = 9; i < 18; i++) {
        $(".container-fluid").append(`
        <div class="time-block row">
        <div class="hour col-1 text-start pt-3">${i < 12 ? `${i}AM` : i > 12 ? `${i-12}PM` : "12PM"}</div>
        <textarea 
        name="" 
        id="text" 
        class="description col-10 ${i < currentHour ? 'past' : i === currentHour ? 'present' : 'future'}">${todos[i] || ""}
        </textarea>
        <button class="saveBtn col-1", data-hour=${i}>Save</button>
        </div>
        `)
    }
        
}

render()

//when saving todo update local storage

$(".saveBtn").on("click", function storage(){
    var textContent = $(this).siblings(".description").val().trim();
    var hour = $(this).data("hour");
    todos[hour] = textContent
    localStorage.setItem("data-hour", JSON.stringify(todos))
})


