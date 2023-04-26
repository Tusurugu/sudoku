// await fetch("https://sudoku.com/api/level/easy", {
//         "credentials": "include",
//         "headers": {
//             "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/111.0",
//             "Accept": "*/*",
//             "Accept-Language": "pl,en-US;q=0.7,en;q=0.3",
//             "X-Requested-With": "XMLHttpRequest",
//             "x-easy-locale": "en",
//             "Alt-Used": "sudoku.com",
//             "Sec-Fetch-Dest": "empty",
//             "Sec-Fetch-Mode": "cors",
//             "Sec-Fetch-Site": "same-origin",
//             "Sec-GPC": "1"
//         },
//         "referrer": "https://sudoku.com/easy/",
//         "method": "GET",
//         "mode": "cors"
//     }).then(resp => resp.json()).then(json => {
//         let x = json.mission;
//     console.dir(x)
//     arr = [];
//     for(let i = 0; i < 81; i++) {
//         let key = Math.floor(i/9);
//         if (arr[key] === undefined) {
//             arr[key] = [];
//         }

//         arr[key][i%9] = x[i];
//     }
//     console.dir(arr);
//         console.dir(json.solution);
//     });
solverrows = [[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]]
solvercolumns = [[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]]
solversquares = [[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]],[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]]
rows = [['2', '0', '8', '0', '0', '0', '1', '0', '9'],
['1', '0', '0', '3', '0', '0', '0', '0', '0'],
['0', '0', '7', '0', '0', '8', '0', '6', '4'],
['4', '9', '0', '2', '0', '0', '0', '0', '0'],
['5', '6', '0', '4', '8', '3', '7', '0', '1'],
['8', '7', '0', '0', '1', '9', '2', '4', '5'],
['7', '0', '0', '0', '6', '1', '0', '0', '0'],
['0', '0', '4', '0', '0', '0', '6', '0', '0'],
['0', '0', '0', '7', '3', '0', '0', '1', '2']]
columns = [[], [], [], [], [], [], [], [], []]
squares = [[], [], [], [], [], [], [], [], []]
function getcolumns() {
    for (let p = 0; p < 9; p++) {
        b = []
        for (k = 0; k < 9; k++) {
            b.push(rows[k][p])

        }
        columns[p] = b
    }
}
function getsquare(a, b, c, d) {
    e = []
    for (i = a; i < b; i++) {
        for (k = c; k < d; k++) {
            e.push(rows[i][k])

        }
    }
    squares[nsq] = e
    nsq++
}
function getsquares() {
    nsq = 0
    getsquare(0, 3, 0, 3)
    getsquare(0, 3, 3, 6)
    getsquare(0, 3, 6, 9)
    getsquare(3, 6, 0, 3)
    getsquare(3, 6, 3, 6)
    getsquare(3, 6, 6, 9)
    getsquare(6, 9, 0, 3)
    getsquare(6, 9, 3, 6)
    getsquare(6, 9, 6, 9)
}
function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function game() {
    error = 0
    rows = [[], [], [], [], [], [], [], [], []]
    for (i = 0; i < 9; i++) {
        gamegenerator(i)
        getcolumns()
    }
    putgameinscreen()

}
function gamegenerator(i) {
    existnumber = []
    for (k = 0; k < 3; k++) {
        d = randomnumber(1, 9);
        j = randomnumber(1, 9);
        b = randomnumber(1, 8);
        if (error > 20000) {
            break
        } else {
            if (existnumber.includes(d)) {
                k--
            } else {
                if (rows[b].includes(d)) {
                    console.log("rows")
                    error++
                    k--
                } else {
                    if (columns[k].includes(d)) {
                        console.log("collums")
                        error++
                        k--
                    } else {
                        rows[b][j] = d
                        existnumber.push(d)
                    }
                }
            }
        }
    }
}
function upload() {
    customrows = document.querySelector(".form-control").value
    //   rows = JSON.parse(customrows)
    Makenumber()
    putgameinscreen()
}
document.querySelector(".newgame").addEventListener("Click", game)
function putgameinscreen() {
    for (i = 0; i < 9; i++) {
        for (k = 0; k < 9; k++) {
            if (rows[i][k] == 0) {


            } else {
                document.getElementsByName("game[" + i + "][" + k + "]")[0].value = rows[i][k]
            }

        }
    }
}
function Makenumber() {
    for (i = 0; i < 9; i++) {
        for (k = 0; k < 9; k++) {
            rows[i][k] = Number(rows[i][k])
        }
    }
}
function gameintorows() {
    for (i = 0; i < 9; i++) {
        for (k = 0; k < 9; k++) {
            if (document.getElementsByName("game[" + i + "][" + k + "]")[0].value === "") {
                rows[i][k] = 0

            } else {
                rows[i][k] = document.getElementsByName("game[" + i + "][" + k + "]")[0].value
            }

        }
    }
}
function check() {
    function checksquare(i) {
        if (squares[i].includes(selectedvalue)) {
            console.log("error sq")
            selected.classList.add("blad")
        } else {
            selected.classList.remove("blad")
            console.log("git sq")
        }
    }
    getcolumns()
    getsquares()
    selected = document.querySelector(".selected")
    selectedrows = selected.name.charAt(5)
    selectedcolumns = selected.name.charAt(8)
    selectedvalue = Number(selected.value)
    if (rows[selectedrows].includes(selectedvalue)) {
        selected.classList.add("blad")
        console.log("error rows")
    } else {
        selected.classList.remove("blad")
        console.log("rows git")
        if (columns[selectedcolumns].includes(selectedvalue)) {
            selected.classList.add("blad")
            console.log("error col")
        } else {
            selected.classList.remove("blad")
            console.log("git col")
            if (selectedcolumns < 3) {
                if (selectedrows < 3) {
                    checksquare(0)
                } else if (selectedrows < 5 && selectedrows > 2) {
                    checksquare(1)
                } else if (selectedrows < 8 && selectedrows > 5) {
                    checksquare(2)
                }
            } else if (selectedcolumns < 5 && selectedcolumns > 2) {
                if (selectedrows < 3) {
                    checksquare(3)
                } else if (selectedrows < 5 && selectedrows > 2) {
                    checksquare(4)
                } else if (selectedrows < 8 && selectedrows > 5) {
                    checksquare(5)
                }
            } else if (selectedcolumns < 8 && selectedcolumns > 5) {
                if (selectedcolumns < 3) {
                    if (selectedrows < 3) {
                        checksquare(6)
                    } else if (selectedrows < 5 && selectedrows > 2) {
                        checksquare(7)
                    } else if (selectedrows < 8 && selectedrows > 5) {
                        checksquare(8)
                    }
                }
            }
        }
    }
}


function select() {
    if (document.querySelector(".selected") === null) {

    } else {
        document.querySelector(".selected").classList.remove("selected")
    }
    event.target.classList.toggle("selected");
}
function selectNumbers() {
    if (document.querySelector(".selectedNumber") === null) {

    } else {
        document.querySelector(".selectedNumber").classList.remove("selectedNumber")
    }
    event.target.classList.toggle("selectedNumber");
}
function addevent() {
    for (i = 0; i < 81; i++) {
        document.querySelector(".gra").children[i].children[1].addEventListener("click", select)
        document.querySelector(".gra").children[i].children[1].addEventListener("input", check)
        document.querySelector(".gra").children[i].children[1].addEventListener("click", selectNumbers)
    }
}
function selectedNumbersbuttons() {
    number = event.target.innerText
    document.querySelector(".selectedNumber").value = number
    check()

}
addevent()
upload();
addevent2()
function addevent2() {
    for (i = 0; i < 9; i++) {
        document.querySelector(".numbers").children[i].children[0].addEventListener("click", selectedNumbersbuttons)
    }
}
function placenumber() {
    check()
    number = document.querySelector(".selectedNumber").innerText
    event.target.value = number;
    for (i = 0; i < 81; i++) {
        document.querySelector(".gra").children[i].children[1].addEventListener("click", placenumber)
    }

}
function dosoleverarray() {
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    solverrows = [[], [], [], [], [], [], [], [], [],]
    solvercolumns = [[], [], [], [], [], [], [], [], [],]
    solversquares = [[], [], [], [], [], [], [], [], [],]
    for (k = 0; k < 9; k++) {
        for (i = 0; i < 9; i++) {
            solverrows[k].push(a)
        }
    }
    for (k = 0; k < 9; k++) {
        for (i = 0; i < 9; i++) {
            solvercolumns[k].push(a)
        }
    }
    for (k = 0; k < 9; k++) {
        for (i = 0; i < 9; i++) {
            solversquares[k].push(a)
        }
    }
}
function solvercheck() {
    function checksquaresolver(i) {
        if (solversquares[i].includes(rows[k][j])) {
            solvercheck
        } else {

        }
    }
    for (k = 0; k < 9; k++) {
        for (i = 0; i < 9; i++) {
            if (solverrows[k].includes(rows[k][i])) {
                console.log("error rows")
            } else {
                solverrows[1][1]
                console.log("rows git")
                if (solvercolumns[i].includes(rows[k][i])) {
                    console.log("error col")
                } else {
                    selected.classList.remove("blad")
                    console.log("git col")
                    if (i < 3) {
                        if (k < 3) {
                            checksquaresolver(0)
                        } else if (k < 5 && k > 2) {
                            checksquaresolver(1)
                        } else if (k < 8 && k > 5) {
                            checksquaresolver(2)
                        }
                    } else if (i < 5 && i > 2) {
                        if (k < 3) {
                            checksquaresolver(3)
                        } else if (k < 5 && k > 2) {
                            checksquaresolver(4)
                        } else if (k < 8 && k > 5) {
                            checksquaresolver(5)
                        }
                    } else if (i < 8 && i > 5) {
                        if (i < 3) {
                            if (k < 3) {
                                checksquaresolver(6)
                            } else if (k < 5 && k > 2) {
                                checksquaresolver(7)
                            } else if (k < 8 && k > 5) {
                                checksquaresolver(8)
                            }
                        }
                    }
                }
            }
        }
    }
}
function solver(k,i){
    function checksquaresolver(b) {
        if (solversquares[b].includes(rows[k][i])) {
            delete solversquares[ solversquares[b].indexOf(rows[k][i])]
        } else {

        }
    }
    if (solverrows[k][i].includes(rows[k][i])) {
        for (d = 0; d < 9; d++){
        solverrows[k][d].splice([solverrows[k][i].indexOf(rows[k][i])],1)
        }
    } else {
        

    }
    if (solvercolumns[i][k].includes(rows[k][i])) {
        for (d = 0; d < 9; d++){
        solvercolumns[i][k].splice([solvercolumns[i][k].indexOf(rows[k][i])],1)
        }
    } else {
    }

    if (i < 3) {
        if (k < 3) {
            checksquaresolver(0)
        } else if (k < 5 && k > 2) {
            checksquaresolver(1)
        } else if (k < 8 && k > 5) {
            checksquaresolver(2)
        }
    } else if (i < 5 && i > 2) {
        if (k < 3) {
            checksquaresolver(3)
        } else if (k < 5 && k > 2) {
            checksquaresolver(4)
        } else if (k < 8 && k > 5) {
            checksquaresolver(5)
        }
    } else if (i < 8 && i > 5) {
        if (i < 3) {
            if (k < 3) {
                checksquaresolver(6)
            } else if (k < 5 && k > 2) {
                checksquaresolver(7)
            } else if (k < 8 && k > 5) {
                checksquaresolver(8)
            }
        }
    }
}
function solverloop(){
    for (k = 0; k < 9; k++) {
        for (i = 0; i < 9; i++) {
            solver(k,i)
            
        }
    }
}