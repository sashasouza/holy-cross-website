import FaceBook from '../assets/FaceBook.png';
import Instagram from '../assets/Instagram.png';
import YouTube from '../assets/YouTube.png';
import Innova from '../assets/innovacrysta.jpeg';
import Review1 from '../assets/Reviews/review1.png';
import Review2 from '../assets/Reviews/review2.png';
import Review3 from '../assets/Reviews/review3.png';

export const paletteColors = {
    blue: '#0066cc',
    red: '#ff0000',
    yellow: '#ffcc00',
};

export const reviews = [
    Review1,
    Review2,
    Review3
]

export const vehicles = [
    {
        vehicleImage: Innova,
        vehicleName: 'Innova Crysta',
        seatingCapacity: '6+1',
        pricePerKm: 'Limit',
        priceOnRequest: '8h/80KM'
    }
]

export const contacts =
{
    phone: '9552520060',

    email: 'arnoldcoutinho1029@gmail.com',

    address: 'Dando Candolim Bardez Goa'
}

export const paletteColorsOrder = [paletteColors.blue, paletteColors.red, paletteColors.yellow];

export const socialSites = [
    {
        name: 'FaceBook',
        img: FaceBook,
        link: 'https://www.facebook.com',
    },
    {
        name: 'Instagram',
        img: Instagram,
        link: 'https://www.instagram.com/',
    },
    {
        name: 'Youtube',
        img: YouTube,
        link: 'https://www.youtube.com/',
    },
];
