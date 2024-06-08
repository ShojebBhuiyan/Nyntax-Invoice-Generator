import AdditionalInformation from "@/components/reservation/additional-information";
import ChargesSummary from "@/components/reservation/charges-summary";
import CustomerInformation from "@/components/reservation/customer-information";
import ReservationHeader from "@/components/reservation/header/reservation-header";
import ReservationDetails from "@/components/reservation/reservation-details";
import VehicleInformation from "@/components/reservation/vehicle-information";

export default function Home() {
  return (
    <main className="container py-6">
      <ReservationHeader />
      <div className="grid grid-cols-3 gap-5">
        <div className="grid grid-cols-1 gap-5">
          <ReservationDetails />
          <VehicleInformation />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <CustomerInformation />
          <AdditionalInformation />
        </div>
        <ChargesSummary />
      </div>
    </main>
  );
}
