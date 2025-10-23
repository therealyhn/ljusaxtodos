import { useState } from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import BookingCards from "../components/booking/BookingCards";
import BookingForm from "../components/booking/BookingForm";

export default function Booking() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <div className="bg-background text-white min-h-screen flex flex-col">
      <Navbar />
      <BookingCards onSelect={setSelectedService} />
      <BookingForm selectedService={selectedService} />
      <Footer />
    </div>
  );
}
