const countdown = document.querySelector('.countdown');

//Set launch date

const launchDate = new Date ('March 16, 2020 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
    // Get todays date and time (ms)
    const now = new Date().getTime();

    // Distance from now to the launch date
    const distance = launchDate - now;

    //Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${minutes}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>        
    `;
    
    // if launch date passed
        if( distance < 0) {
            //stop countdown
            clearInterval(intvl);
            //style and output text
            countdown.style.color = 'yellow';
            countdown.innerHTML = 'Launched!';
    
        }
        
}, 1000);