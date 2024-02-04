// function Random() {
//     function randomNumber(no) {
//         let n;
//         for (let i = 0; i < no; i++) {
//             n = Math.random() * 10;
//         }
//         return Math.round(n);
//     }

//     return (
//         <h3 style={{ backgroundColor: '#776691' }}>
//             The random number is: {randomNumber(6)}
//         </h3>
//     );
// }

// export default Random;

function Random() {
    function getRandomNumber(digits) {
        let min = Math.pow(10, digits - 1);
        let max = Math.pow(10, digits) - 1;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    const numberOfDigits = 6; 

    const randomNo = getRandomNumber(numberOfDigits);
    const randomColor = getRandomColor();

    return (
        <h3 style={{ backgroundColor: randomColor, color: 'white' }}>
            The random number is: {randomNo}
        </h3>
    );
}

export default Random;
