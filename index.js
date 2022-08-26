// // document.getElementById("count-nm").innerHTML = "Nidhi"
// let count = document.getElementById("count-nm").innerHTML = 1;
// document.getElementById("increment-btn").onclick = count + 1;
let countNm = document.getElementById("count-nm");
let saveEl = document.getElementById("save-el")
let count = 0;

function increment() {
    // count = count + 1
    count += 1;
    countNm.textContent = count;

}

function save() {
    // let saveElNum = `Previous Entries ${count} -`
    let saveElNum = count + " - ";
    saveEl.textContent += saveElNum;

    countNm.textContent = 0;
    count = 0;
}


