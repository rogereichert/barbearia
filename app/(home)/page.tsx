import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search"
import BookingItem from "../_components/booking";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Roger!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>
      
      <div className="px-5 mt-6">
        <p className="text-sm mb-3 uppercase text-gray-400 font-bold">Agendamentos</p>
          <BookingItem />
      </div>
    </div>
  );
}