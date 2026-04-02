import { Metadata } from "next";
import ContactHeroBanner from "@/components/contact/ContactHeroBanner";
import ContactInfoStrip from "@/components/contact/ContactInfoStrip";
import ContactMainSection from "@/components/contact/ContactMainSection";
import ContactMapSection from "@/components/contact/ContactMapSection";
import ContactCTABanner from "@/components/contact/ContactCTABanner";

export const metadata: Metadata = {
  title: "Contact Us | Luxury Xpress Car Repair",
  description: "Get in touch with Luxury Xpress. Call us, email us, or visit our workshop at 3205 NW 5th Ave, Miami, FL 33127, United States. Professional car maintenance services.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#000000] min-h-screen font-sans text-white">
      
      {/* 2. Hero Banner */}
      <ContactHeroBanner 
        title="Contact" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" }
        ]} 
      />

      {/* 3. Info Strip (Phone, Mail, Map) */}
      <ContactInfoStrip />

      {/* 4. Main Section (Info Panel + Form) */}
      <ContactMainSection />

      {/* 5. Map Section */}
      <ContactMapSection />

      {/* 6. CTA Banner */}
      <ContactCTABanner />

    </div>
  );
}
