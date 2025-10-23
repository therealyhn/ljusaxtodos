import { useState } from "react";
import Navbar from "../components/nav/Navbar";
import SectionHeader from "../components/common/SectionHeader";
import Footer from "../components/footer/Footer";
import BookingCards from "../components/booking/BookingCards";
import BookingForm from "../components/booking/BookingForm";

export default function Booking() {
    const [selectedService, setSelectedService] = useState("");

    return (
        <div className="bg-background text-white min-h-screen flex flex-col">
            <Navbar />
            <SectionHeader
                title="Bookings"
                subtitle="Book your next event with us" />
            <BookingCards onSelect={setSelectedService} />
            <BookingForm selectedService={selectedService} />
            <Footer />
        </div>
    );
}
