import { HeroSection } from "@/components/HeroSection";
import { FeaturePillars } from "@/components/FeaturePillars";
import { ModesGrid } from "@/components/ModesGrid";
import { FeatureDeepDive } from "@/components/FeatureDeepDive";
import { FeedbackSection } from "@/components/FeedbackSection";
import { PricingTeaser } from "@/components/PricingTeaser";
import { AITransparencyStrip } from "@/components/AITransparencyStrip";
import { DownloadCTA } from "@/components/DownloadCTA";
import type { Metadata } from "next";
import { APP_NAME, TAGLINE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${APP_NAME} — ${TAGLINE}`,
  openGraph: {
    url: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturePillars />
      <ModesGrid />
      <FeatureDeepDive />
      <FeedbackSection />
      <PricingTeaser />
      <AITransparencyStrip />
      <DownloadCTA />
    </>
  );
}
