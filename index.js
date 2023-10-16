const loading = document.querySelector('#loading');
const loadingBlue = document.querySelector('#loading-screen');

window.addEventListener('load', () => {
    loading.animate(
        {
            opacity:[1,0],
            visiblity: 'hidden',
            display: 'none',
    },
    {
        duration:2000,
        delay: 1200,
        easing: 'ease',
        fill: 'forwards',


    }
    );

    loadingBlue.animate(
        {
            translate:['0 100vh','0 0','0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
          }
        );
}
);