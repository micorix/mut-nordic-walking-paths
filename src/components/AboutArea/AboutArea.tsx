import bocznicaPlanImg from "../../assets/img/bocznica-plan.png";
import radiostacjaImg from "../../assets/img/radiostacja.png";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "@react-icons/all-files/fi/FiArrowLeft";

const AboutArea = () => (
  <div className="mt-5 px-5 md:px-0 md:w-1/2 mx-auto pb-10">
    <Link
      to="/"
      className="mb-8 flex hover:-translate-x-1 transform transition"
    >
      <FiArrowLeft className="text-2xl mr-2" />
      <span className="">Powróć do listy</span>
    </Link>
    <h1 className="text-2xl font-bold">Ciekawe miejsca</h1>
    <h3 className="mt-5 text-xl font-bold">Stara bocznica kolejowa</h3>
    <p class="mt-2">
      Szeroka ścieżka o prostym przebiegu biegnąca przez Las Bemowski to
      pozostałość dawnej bocznicy kolejowej, prowadzącej do pobliskiego Lotniska
      Bemowo.
      <br />
      <br />
      Warszawska Magistrala Hutniczej to istniejąca linia kolejowa,
      rozpoczynająca się w okolicy wiaduktu przy ul. Górczewskiej, biegnąca
      przez Bemowo, Las Bemowski, Radiowo do Huty. W jedną stronę jest nią
      transportowany złom do huty, niezbędny do produkcji, a w drugą gotowe
      wyroby stalowe. Dawniej od linii odchodził od niej szereg bocznic. Jedna z
      nich odgałęziała się jeszcze niedawno w okolicy ogródków działkowych,
      pomiędzy ul. Leskiego a poligonem WAT i prowadziła do wojskowej bazy
      paliwowej przy ul. Radiowej. Tory tej ostatniej bocznicy zostały rozebrane
      w drugiej połowie 2019 roku. Jeszcze wcześniej (około 2000 roku) została
      zlikwidowana odgałęziająca się od niej właśnie "nasza" bocznica, biegnąca
      do Lotniska Bemowo. Dziś pozostała już tylko po niej właśnie owa szeroka
      ścieżka przez las, można też dostrzec pozostałości przejazdu kolejowego
      przez ul. Radiową a także przez ul. Sobczaka i ul. Akantu na Boernerowie
      (tuż przy ul. Kleeberga). W tych ostatnich dwóch miejscach można nawet
      jeszcze dostrzec niewielkie fragmenty torów wystające z nawierzchni.
    </p>
    <span class="mt-2 block text-sm">Źródło: opencaching.pl</span>

    <img src={bocznicaPlanImg} alt="" class="mt-5 h-42 mx-auto" />
    <h3 className="mt-5 text-xl font-bold">
      Radiostacja Transatlantyczna Babice
    </h3>
    <p className="mt-2">
      Po odzyskaniu przez Polskę niepodległości w listopadzie 1918 roku, nowo
      odrodzone państwo cierpiało na brak wydajnych i nowoczesnych środków
      komunikacji z zagranicą. Przejęte po zaborcach stacje radiotelegraficzne
      zlokalizowane w Warszawie, Poznaniu oraz Lublinie były w tym czasie już
      przestarzałe i nie spełniały niezbędnych wymagań.
      <br />
      <br />
      W latach 1920-1921 w Ministerstwie Poczt i Telegrafów skrystalizowała się
      koncepcja budowy czterech radiostacji umożliwiających wymianę informacji w
      granicach kraju, z najbliższą zagranicą oraz międzykontynentalnie,
      zwłaszcza ze Stanami Zjednoczonymi. Ponieważ w tym czasie Towarzystwo
      „Radio Corporation of America” wznosiło na wyspie Long Island potężna
      centralę radiotelegraficzną, mającą za zadanie nadawać sygnał do państw
      Europy, Ameryki Południowej i krajów leżących za Pacyfikiem, minister
      poczt i telegrafów Władysław Stesłowicz zawarł z Amerykanami umowę na
      zakup licencji i wykorzystanie tej nowoczesnej techniki. Ustalenia
      zobowiązały obydwie strony do podziału kompetencji i czynności w trakcie
      projektowania i montażu instalacji.
      <br />
      <br />
      Budowa takiej transatlantyckiej radiostacji miała spełniać w zamyśle kilka
      celów. Najistotniejszym był wspomniany wyżej cel polityczno-pragmatyczny;
      ściśle związany z zapewnieniem Polsce stałej komunikacji
      międzykontynentalnej, pokazywać miał ponadto Światu fakt powrotu Polski na
      mapy i do światowej polityki, promować ją w niej i w świadomości
      obcokrajowców. Wzniesienie radiostacji o zasięgu międzykontynentalnym
      umożliwić miało też kontakt wielomilionowej Polonii z Ojczyzną. Realizacja
      projektu miała również cel prestiżowy – danie dowodu na to, że dźwigająca
      się na nogi Rzeczpospolita jest w stanie dokonać poważnej inwestycji z
      potężnym nakładem finansowym i surowcowym, tym samym lokując się w ścisłej
      światowej czołówce. Budowa radiostacji miała realizować również cel
      marketingowy – wyjście naprzeciw zapotrzebowaniu rynku na nowoczesne i
      wydajne środki komunikacji. W końcu i możliwość stworzenia nowych,
      licznych miejsc pracy nie była bez znaczenia.
    </p>
    <a
      href="https://trcn.pl/historia-trcn/"
      target="_blank"
      rel="noreferrer noopener"
      class="underline mt-2 inline-block"
    >
      Więcej na tcrn.pl
    </a>
    <img src={radiostacjaImg} alt="" className="mt-5 h-42 mx-auto" />
  </div>
);

export default AboutArea;
