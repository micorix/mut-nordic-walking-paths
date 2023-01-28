import Map from "./Map";
import { Link, useParams } from "react-router-dom";
import tracks from "../../content/tracks";
import { SiGooglemaps } from "@react-icons/all-files/si/SiGooglemaps";
import { FiPrinter } from "@react-icons/all-files/fi/FiPrinter";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft";

const ErrorPage = () => {
  return (
    <div className="w-full flex justify-center mt-20">
      <h1 class="text-center text-xl">Nie znaleziono trasy</h1>
    </div>
  );
};

const TrackPage = () => {
  const { slug } = useParams();
  const track = tracks.find((t) => t.slug === slug);
  if (!track) {
    return <ErrorPage />;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="lg:grid grid-cols-5 h-full">
      <div className="col-span-1 px-10 py-5">
        <Link
          to="/"
          className="mb-8 flex hover:-translate-x-1 transform transition"
        >
          <FiArrowLeft className="text-2xl mr-2" />
          <span className="">Powróć do listy</span>
        </Link>
        <h1 className="text-2xl font-bold">{track.name}</h1>
        <table className="mt-5 table-auto  border">
          <tr>
            <th class="p-2 text-left">Dystans</th>
            <td class="p-2">{track.distance}km</td>
          </tr>
          <tr>
            <th class="p-2 text-left">Czas</th>
            <td class="p-2">{track.time}min</td>
          </tr>
        </table>

        <span className="block mt-5 text-lg font-bold">Przez:</span>
        <ul class="list-disc list-inside">
          {track.via.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
        <Link
          to="/about-area"
          className="font-bold text-sm hover:underline mt-2 inline-block"
        >
          Zobacz ciekawe miejsca na trasie
        </Link>

        <p className="my-10">
          <strong>Drukowanie mapy</strong>
          <br />
          Aby wydrukować mapę, najedź na ikonkę drukarki w lewym górnym rogu
          mapy, a następnie wybierz orientację strony.
        </p>

        <div className="mt-10">
          <a
            href="https://www.google.com/maps/d/u/0/edit?mid=1TgATGkBPSeZdKsqj5QLw0qxiUjXERB4&usp=sharing"
            class="flex items-center text-center px-5 py-2 border-2 border-blue-300 rounded"
          >
            <SiGooglemaps className="w-5 mr-5" />
            <span className="block w-full text-center">
              Zobacz trasę w Google Maps
            </span>
          </a>
          <a
            href={`/assets/track_data/${track.slug}.gpx`}
            download=""
            className="mt-5 items-center flex text-center px-5 py-2 border-2 border-blue-300 rounded"
          >
            <FiDownload className="w-5 mr-5" />
            <span className="block w-full text-center">Pobierz plik GPX</span>
          </a>
        </div>
      </div>
      <div className="col-span-4 h-96 lg:h-full">
        <Map geoJSON={track.geoJSON} />
      </div>
    </div>
  );
};

export default TrackPage;
