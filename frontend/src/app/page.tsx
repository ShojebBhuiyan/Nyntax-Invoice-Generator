import ReservationHeader from "@/components/reservation/header/reservation-header";
import ReservationDetails from "@/components/reservation/reservation-details";

export default function Home() {
  return (
    <main className="container py-6">
      <ReservationHeader />
      <div className="grid grid-cols-3">
        <ReservationDetails />
      </div>
    </main>
  );
}
