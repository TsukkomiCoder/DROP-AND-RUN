"use strict";
const TOTAL_PAGES = 47;
let currentPage = 1

const PROLOGUE = 3
const CHAPT1 = 8
const CHAPT2 = 20
const CHAPT3 = 39
const CHAPT4 = {};

window.onload = updatePage;

let image = document.getElementById("comic-page");
let count = document.getElementById("page-count");
let chapt = document.getElementById("chapt-count");

let buttonContainer = document.getElementsByClassName("button-container");

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let startButton = document.getElementById("start");

nextButton.addEventListener("click", nextPage)
nextButton.addEventListener("click", updatePage)

prevButton.addEventListener("click", prevPage)
prevButton.addEventListener("click", updatePage)

startButton.addEventListener("click", function(){
    currentPage = 0;
})
startButton.addEventListener("click", updatePage)

function nextPage() {
    if (currentPage < TOTAL_PAGES){
        currentPage++;
        updatePage();
    }
    else {
        window.alert("You have reached the last page (for now...)")
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
    else {
        window.alert("You are at the first page, you can't go back! Muahaha!")
    }
}

function updatePage() {
    image.src = "images/DROPANDRUN" + currentPage + ".png";

    if (currentPage <= PROLOGUE) {
        chapt.textContent = "Prologue";
    }
    else if (currentPage <= CHAPT1) {
        chapt.textContent = "Chapter 1";
    }
    else if (currentPage <= CHAPT2) {
        chapt.textContent = "Chapter 2";
    }
    else if (currentPage <= CHAPT3) {
        chapt.textContent = "Chapter 3";
    }
    else if (currentPage <= CHAPT4) {
        chapt.textContent = "Chapter 4";
    }
    else {
        chapt.textContent = "Unexpected Error"
    }

    if (currentPage == 0) {
        count.textContent = "Title";
    }
    else {
        count.textContent = "Page " + currentPage;
    }

}

document.addEventListener("keydown", function(e) {
    e.preventDefault();

    if (e.key == "ArrowLeft") {
        prevPage();
    }
    else if (e.key == "ArrowRight") {
        nextPage();
    }
})