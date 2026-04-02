import PageHero from "../../../components/services/PageHero";
import ServiceContent from "../../../components/services/ServiceContent";
import ServiceSidebar from "../../../components/services/ServiceSidebar";
import CtaBanner from "../../../components/services/CtaBanner";
import { servicesData } from "../../../data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Service Not Found | Luxury Xpress",
    };
  }

  return {
    title: `${service.title} | Luxury Xpress`,
    description: service.shortDescription,
  };
}

export default async function DynamicServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[#0E0E0E] min-h-screen font-sans text-white">
      {/* 2. Page Hero */}
      <PageHero 
        title={service.title} 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title }
        ]} 
      />

      {/* 3. Main Content Area */}
      <main className="container mx-auto px-4 py-16 lg:py-24 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* Left Column Component Layer */}
          <ServiceContent service={service} />

          {/* Right Column Component Layer */}
          <ServiceSidebar currentSlug={slug} />

        </div>
      </main>

      {/* 4. CTA Banner */}
      <CtaBanner />

    </div>
  );
}
