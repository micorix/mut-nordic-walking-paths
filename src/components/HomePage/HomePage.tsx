import tracks from "../../content/tracks";
import { Link } from "react-router-dom";
import {FC} from "preact/compat";

const TrackCard: FC<{track: any, i: number}> = ({ track, i }) => (
  <Link to={`/track/${track.slug}`} className="flex mt-5 w-full">
    <div className="flex items-center mr-5">
      <span className="block rounded-full w-10 h-10 text-lg flex items-center justify-center border-blue-500 border-2">
        {i}.
      </span>
    </div>
    <div className="w-full">
      <h4 className="text-xl font-semibold">{track.name}</h4>
      <span className="my-1 block text-sm">
        <strong>Przez:</strong> {track.via.join(", ")}
      </span>
      <span className="">Dystans: {track.distance}km</span>
      <span className="ml-4">Czas: {track.time}min</span>
    </div>
  </Link>
);

const HomePage = () => {
  return (
    <div className="mt-10 mx-10">
      <div className="md:w-96 mx-auto">
        <div className="mt-10 mb-5">
          <h3 className="font-bold text-2xl">Wykaz tras</h3>
          <p className="mt-2">
            Dla każdej trasy dostępna jest mapa, opcja wydruku oraz link do
            Google Maps.
          </p>
          <a
            href="https://www.google.com/maps/d/u/0/edit?mid=1TgATGkBPSeZdKsqj5QLw0qxiUjXERB4&usp=sharing"
            class="font-bold text-sm hover:underline mt-5 mb-1 inline-block"
          >
            Zobacz trasy w Google Maps
          </a>
          <Link
            to="/about-area"
            className="font-bold text-sm hover:underline mb-5 mt-1 inline-block"
          >
            Zobacz ciekawe miejsca na trasie
          </Link>
        </div>
        {tracks.map((track, i) => (
          <TrackCard track={track} i={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
