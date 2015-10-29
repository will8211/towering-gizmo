/*
 *  JQuery script to handle for Tower of Hanoi movements
 */

function calc_move(movement) {

    var snapshot = movement[0];
    var source_name = movement[1];
    var dest_name = movement[2];

    switch(source_name) {
        case 'peg_0':
            var id_no = snapshot[0].state.pop()
            break;
        case 'peg_1':
            var id_no = snapshot[1].state.pop()
            break;
        case 'peg_2':
            var id_no = snapshot[2].state.pop()
            break;
    };
    var id = "#" + id_no;

    var start = $( '#' + source_name ).position().left;
    var stop = $( '#' + dest_name ).position().left;
    var travel = (stop - start);
    if (travel < 0) {
        travel = "-=" + Math.abs(travel);
    } else {
        travel = "+=" + travel;
    };
    
    var floor = $( '#base_0' ).position().top - 30;
    switch(dest_name) {
        case 'peg_0':
            var drop = snapshot[0].state.length
            break;
        case 'peg_1':
            var drop = snapshot[1].state.length
            break;
        case 'peg_2':
            var drop = snapshot[2].state.length
            break;
    };
    drop = floor - drop*30
    
    return [id, travel, drop];
    
};

$(document).click(function() {
    
    [id, travel, drop] = calc_move( moves_list.shift() )
    
    $( id ).animate({
      'top': 20
    }, 500);

    $( id ).animate({
       'left': travel
    }, 500);
    
    $( id ).animate({
       'top': drop
    }, 500);
    
});

