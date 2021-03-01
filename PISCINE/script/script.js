$(document).ready(function(){

    var rockComputer = './img/rock.png';
    var scissorsComputer = './img/scissors.png';
    var paperComputer = './img/paper.png';

    var rockUser = './img/rock.png';
    var scissorsUser = './img/scissors.png';
    var paperUser = './img/paper.png';

    var computerTab = ["rock", "paper", "scissors"];
    var randomComputer = 0;
    $('#user').attr('src', "");
    $('#computer').attr('src', "");

    
    function getRandom(computerTab) {
        var computerChoice = [Math.floor((Math.random()*computerTab.length))];
        return computerChoice;
    } 

    $('.symbols').on("click", function() {
        randomComputer = getRandom(computerTab);

        if($(this).attr("id") == "rock" && randomComputer == 0) {
            console.log('rock computer')
            $('#user').attr('src', rockUser);
            $('#computer').attr('src', rockComputer);
        }

        else if($(this).attr("id") == "paper" && randomComputer == 0) {
            console.log('rock computer')
            $('#user').attr('src', paperUser);
            $('#computer').attr('src', rockComputer);
        }

        else if($(this).attr("id") == "scissors" && randomComputer == 0) {
            console.log('rock computer')
            $('#user').attr('src', scissorsUser);
            $('#computer').attr('src', rockComputer);
        }

        else if ($(this).attr("id") == "paper" && randomComputer == 1) { 
            console.log('paper computer')
            $('#user').attr('src', paperUser);
            $('#computer').attr('src', paperComputer);
        }

        else if ($(this).attr("id") == "rock" && randomComputer == 1) { 
            console.log('paper computer')
            $('#user').attr('src', rockUser);
            $('#computer').attr('src', paperComputer);
        }

        else if ($(this).attr("id") == "paper" && randomComputer == 1) { 
            console.log('paper computer')
            $('#user').attr('src', paperUser);
            $('#computer').attr('src', paperComputer);
        }

        else if ($(this).attr("id") == "scissors" && randomComputer == 1) { 
            console.log('paper computer')
            $('#user').attr('src', scissorsUser);
            $('#computer').attr('src', paperComputer);
        }

        else if ($(this).attr("id") == "rock" && randomComputer == 2) { 
            console.log('scissors computer')
            $('#user').attr('src', rockUser);
            $('#computer').attr('src', scissorsComputer);
        }

        else if ($(this).attr("id") == "paper" && randomComputer == 2) { 
            console.log('scissors computer')
            $('#user').attr('src', paperUser);
            $('#computer').attr('src', scissorsComputer);
        }

        else if ($(this).attr("id") == "scissors" && randomComputer == 2) { 
            console.log('scissors computer')
            $('#user').attr('src', scissorsUser);
            $('#computer').attr('src', scissorsComputer);
        }
    })
});