/*
 *  Draws the initial game board
 */

var  colors = ["#ff0000", 
               "#00ff00", 
               "#0000ff", 
               "#ffff00", 
               "#ff00ff", 
               "#00ffff", 
               "#ff0000", 
               "#00ff00", 
               "#0000ff", 
               "#ffff00"];

for (i = 0; i < 3; i++) {

    document.write('<div id="base_' + i + '" style="' +
                    'background-color: #955B00; ' +
                    'position: absolute; ' +
                    'left: ' + ((i + 1)*300 - setup[0]*10 - 115) + 'px; ' +
                    'top: ' + (setup[0]*30 + 130) + 'px; ' +
                    'height: 20px; ' +
                    'width: ' + (setup[0]*20 + 60) + 'px;' +
                    'border-radius: 5px' +
                    '"></div>\n');
    
    document.write('<div id="peg_' + i + '" style="' +
                    'background-color: #955B00; ' +
                    'position: absolute; ' +
                    'left: ' + ((i + 1)*300 - 95 ) + 'px; ' +
                    'top: 100px; ' +
                    'height: ' + (setup[0]*30 + 40) +'px; ' +
                    'width: 20px;' +
                    'border-radius: 5px' +
                    '"></div>\n');  

};

for (i = 1; i <= setup.length; i++) {

    document.write('<div id="' + i + '" style="' +
                    'background-color: ' + colors[i - 1] + '; ' +
                    'position: absolute; ' +
                    'left: ' + (200 - i*10) + 'px; ' +
                    'top: ' + (i*30 + 100) + 'px; ' +
                    'height: 30px; ' +
                    'width: ' + (i*20 + 30) + 'px;' +
                    'border-radius: 15px' +
                    '"></div>\n');

};

