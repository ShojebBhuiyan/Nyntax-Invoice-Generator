import AdditionalInformation from "@/components/reservation/additional-information";
import CustomerInformation from "@/components/reservation/customer-information";
import ReservationHeader from "@/components/reservation/header/reservation-header";
import ReservationDetails from "@/components/reservation/reservation-details";

export default function Home() {
  return (
    <main className="container py-6">
      <ReservationHeader />
      <div className="grid grid-cols-3 gap-5">
        <ReservationDetails />
        <div className="grid grid-cols-1 gap-5">
          <CustomerInformation />
          <AdditionalInformation />
        </div>
      </div>
    </main>
  );
}
