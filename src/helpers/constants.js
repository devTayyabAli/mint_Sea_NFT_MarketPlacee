export const categoryOptions = [
    { label: 'Art', value: 'art', icon: 'las la-palette' },
    { label: 'Music', value: 'music', icon: 'las la-music' },
    { label: 'Domain Names', value: 'domainNames', icon: 'las la-globe-americas' },
    { label: 'Virtual Worlds', value: 'virtualWorlds', icon: 'las la-vr-cardboard' },
    { label: 'Trading Cards', value: 'trendingCards', icon: 'las la-mail-bulk' },
    { label: 'Collectibles', value: 'collectibles', icon: 'las la-boxes' },
];


export const BlockChainOptions = [
    { label: 'Mumbai', value: 'Mumbai', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
  </svg>},
    { label: 'Binance testnet', value: 'Binance_testnet', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    </svg> },
    { label: 'Sepolia', value: 'Sepolia', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    </svg> },
    
];

export const particlesOptions = {
    fpsLimit: 15,
    fullScreen: {
        enable: false,
    },
    particles: {
        color: {
            value: '#3275ac',
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: false,
            opacity: 0,
            width: 1,
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: 'top',
            enable: true,
            outMode: 'out',
            random: true,
            speed: 0.5,
            straight: false,
        },
        number: {
            value: 250,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            random: true,
            value: 4,
        },
    },
    detectRetina: true,
};
