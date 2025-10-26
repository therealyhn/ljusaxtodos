import PerformanceCard from "./PerformanceCard";
import { Headphones, Music4 } from "lucide-react";
import soloImg from "../../../assets/4.jpg"
import heroImg from "../../../assets/9.jpg"

export default function PerformanceStyles() {
    return (
        <section className="relative py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-heading text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
                    Performance Styles
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <PerformanceCard
                        icon={Music4}
                        title="Solo Performances"
                        description="Individual artistry at its finest. Each DJ brings their distinct sound, style, and energy to create unforgettable solo experiences."
                        buttonText="Book Solo Set"
                        buttonColor="bg-gradient-primary hover:opacity-90"
                        image={soloImg}
                    />

                    <PerformanceCard
                        icon={Headphones}
                        title="Back-to-Back Sets"
                        description="Experience the ultimate collaborative energy as we blend our unique styles in real-time."
                        buttonText="Book B2B Set"
                        buttonColor="bg-primary-blue hover:opacity-90"
                        image={heroImg}
                    />

                    {/* <PerformanceCard
                        icon={Music4}
                        title="Solo Performances"
                        description="Individual artistry at its finest. Each DJ brings their distinct sound, style, and energy to create unforgettable solo experiences."
                        buttonText="Book Solo Set"
                        buttonColor="bg-gradient-primary hover:opacity-90"
                        image={soloImg}
                    /> */}
                </div>
            </div>
        </section>
    );
}
