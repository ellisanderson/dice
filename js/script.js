window.addEventListener( 'DOMContentLoaded', function () {

		const buttonRoolDice = document.querySelector( '.dice-roll' );

    function rollDice () {

        const diceSide1 = document.getElementById( 'dice-side-1' );
        const diceSide2 = document.getElementById( 'dice-side-2' );
        const status = document.getElementById( 'status' );

        const side1 = Math.floor( Math.random() * 6 ) + 1;
        const side2 = Math.floor( Math.random() * 6 ) + 1;
        const diceTotal = side1 + side2;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;
    }

    buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);
