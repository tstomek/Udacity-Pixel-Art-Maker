// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



const grid = $("#pixelCanvas");

$(document).ready(function(){

    function makeGrid() {

        let Height = $("#inputHeight").val();
        let Width = $("#inputWeight").val();
        let row = ("<tr></tr>");
        let cell = ("<td></td>");

        for (let x=0; x < Height; x++){

            grid.append(row);

            for (let y=0; y < Width; y++){

                grid.children().last().append(cell);
            }
        }
    }
    $('#sizePicker').on("submit",function(event){

        event.preventDefault();

        grid.empty();

        makeGrid();

    });

    grid.on('click', 'td', function(event){
        $(this).css("background-color", $("#colorPicker").val());
    });
});


