/*
 *  Javascript port of tower_of_hanoi.py!
 */

function Game(height) {
    this.pegs = [{name: "peg_0", state: []}, 
                 {name: "peg_1", state: []}, 
                 {name: "peg_2", state: []}];
    this.moves =  0;
    while (height > 0) {
        this.pegs[0].state.push(height);
        height -= 1;
    };
};

function move_ring(source, dest) {
    var snapshot = jQuery.extend(true, {}, g.pegs)
    dest.state.push(source.state.pop());
    g.moves += 1;
    moves_list.push([snapshot, source.name, dest.name])
};

function solve(a, b, c, height) {
    if (height == 1) {
        move_ring(a, c);
    } else {
        solve(a, c, b, height-1);
        move_ring(a, c);
        solve(b, a, c, height-1);
    };
};

var height = parseInt(window.prompt("What is the height of the tower?"));
g = new Game(height);
var setup = jQuery.extend([], g.pegs[0].state) //Clone state of peg[0] list
var moves_list = []
solve(g.pegs[0], g.pegs[1], g.pegs[2], height);



