rows = [[], [], [], [], [], [], [], [], []]
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
            e.push(rows[k][i])

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
    for (i=0; i<9; i++){
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
        if(error > 20000){
            break}else{
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
document.querySelector(".newgame").addEventListener("Click", game)  
function putgameinscreen(){
    for (i=0; i<9;i++){
        for (k=0; k<9;k++){
            document.getElementsByName("game["+i+"]["+k+"]")[0].value = rows[i][k]

        }
    }
}