import petlaGeoJSON from '../assets/geojsons/petla.json'
import wokolStrzelnicyGeoJSON from '../assets/geojsons/wokol_strzelnicy.json'
import zaRadiowaGeoJSON from '../assets/geojsons/za_radiowa.json'
import ruinyWiezyGeoJSON from  '../assets/geojsons/ruiny_wiezy.json'

const tracks = [
    {
        slug: 'petla',
        name: 'Pętla',
        via: [
            'Strzelnica nr 2',
            'Zbiorniki paliw',
            'Radiowo'
        ],
        time: 56,
        distance: 3.4,
        geoJSON: petlaGeoJSON
    },
    {
        slug: 'wokol_strzelnicy',
        name: 'Wokół strzelnicy',
        via: [
            'Kanał Lipkowski',
            'Budka strażnicza',
            'Ruiny wieży nr 3 Transatlantyckiej Centrali Radiotelegraficznej Bemowo'
        ],
        time: 66,
        distance: 4,
        geoJSON: wokolStrzelnicyGeoJSON
    },
    {
        slug: 'za_radiowa',
        name: 'Za Radiową',
        via: [
            'Strzelnica nr 2',
            'ul. Gen. Kutrzeby',
            'Stara bocznica kolejowa'
        ],
        time: 70,
        distance: 4.2,
        geoJSON: zaRadiowaGeoJSON
    },
    {
        slug: 'ruiny_wiezy',
        name: 'Ruiny Wieży',
        via: [
            'Budka strażnicza',
            'Ruiny wieży nr 4 Transatlantyckiej Centrali Radiotelegraficznej Bemowo'
        ],
        time: 68,
        distance: 4.1,
        geoJSON: ruinyWiezyGeoJSON
    },

]

export default tracks