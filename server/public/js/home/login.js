"use strict"

const id = document.querySelector("#id"),
passowrd = document.querySelector("#passowrd"),
loginBtn = document.querySelector("#id");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        passowrd: passowrd.value
    };

    fetch("/login",{
        method: "POST",
        headers:{
            "Contnent-Type": "application/json",
        },
        body:JSON.stringify(req),
    });
}