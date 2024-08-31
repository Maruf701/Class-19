//  #1 — Print the numbers from 0 to 15 -- Omly While loop Use;

/*
    var x = 0;

    while(x <= 15){

        document.write(" " + x);

        x++;

    }
*/


//  #2 — Print the numbers from 12 to 24 -- Omly While loop Use;

/*
    var i = 12;

    while(i <= 24){

        document.write(" " + i);

        i++;

    }
*/



//  #3 — Print the ODD numbers from 7 to 31 -- Omly While loop Use;


/*
    var x = 7;

    while(x <= 31){

        x++;

        if(x % 2 !== 0){

            document.write(x + "<br>");

        }

    }
*/




//  #4 — Print the EVEN numbers from 10 to -20 -- Omly While loop Use;

/*
    var i = 10;

    while(i <= 20){

        document.write(" " + i);
        i = i + 2   ;
    }

*/



//  write a Program 3 and 5 ;





    var x = 1;
    var sum = 0;

    do{

        if(x % 3 == 0 && x % 5 == 0){

            sum = sum + x;

            document.write(" " + x);

        }
        
        x++;

    }while(x <= 100);

    document.write(" = " + sum);