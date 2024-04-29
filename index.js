const reservedSeats = [];
const buyerPhone = '+375 (29) 111-11-11'

function moveCarouselLeft() {
    console.log('left')
}

function moveCarouselRight() {
    console.log('right')
}

function reserveSeat(elem) {
    const seatNumber = elem.innerHTML;
    if (elem.style.backgroundColor === 'yellow') {
        elem.style.backgroundColor = 'gray';
        reservedSeats[seatNumber - 1] = 0;
    } else {
        elem.style.backgroundColor = 'yellow';
        reservedSeats[seatNumber - 1] = 1;
    }
    console.log(reservedSeats);
}

function buyTickets() {
    localStorage.setItem(buyerPhone, reservedSeats);
    reservedSeats.map(() => 0);
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        const hasAnyBookedSeat = reservedSeats.some(elem => {
            return value.some(e => {
                return elem === e;
            })
        })
        if (hasAnyBookedSeat === true) {
            alert("ОШИБКА!!!!")
        }
    }
    console.log(localStorage);
}
