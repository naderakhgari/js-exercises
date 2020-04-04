////////Part 1

let JumbotronEl = document.querySelector(".jumbotron");//asigned div.jumbotron to variable JumbotronEl.
let donateBykBtn = document.querySelectorAll(".btn-lrg")[0];//asigned the first link with class btn-lrg to variable donateBykBtn.
let volunteerColor = document.querySelectorAll(".btn-lrg")[1];//asigned the second link with class btn-lrg to variable volunteerColor.

document.getElementById("blueBtn").addEventListener("click", function(){// function click the blueBtn
    JumbotronEl.style.backgroundColor = "#588fbd";
    donateBykBtn.style.backgroundColor = "#ffa500";
    volunteerColor.style.backgroundColor = "#000000";
    volunteerColor.style.color = "#ffffff"
});
document.getElementById("orangeBtn").addEventListener("click", function(){// function click the orangeBtn
    JumbotronEl.style.backgroundColor = "#f0ad4e";
    donateBykBtn.style.backgroundColor = "#5751fd";
    volunteerColor.style.backgroundColor = "#31b0d5";
    volunteerColor.style.color = "#ffffff"
});
document.getElementById("greenBtn").addEventListener("click", function(){// function click the greenBtn
    JumbotronEl.style.backgroundColor = "#87ca8a";
    donateBykBtn.style.backgroundColor = "#000000";
    volunteerColor.style.backgroundColor = "#8c9c08";
});
