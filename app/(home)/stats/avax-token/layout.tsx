import type { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "LUX Token Stats",
  description:
    "Track LUX token supply, staking, and burn metrics including total supply, circulating supply and fees burned across all chains.",
  openGraph: {
    url: "/stats/lux-token",
    images: {
      alt: "LUX Token Stats",
      url: "/api/og/stats/c-chain?title=LUX Token Stats&description=Track LUX token supply, staking, and burn metrics",
      width: 1280,
      height: 720,
    },
  },
  twitter: {
    images: {
      alt: "LUX Token Stats",
      url: "/api/og/stats/c-chain?title=LUX Token Stats&description=Track LUX token supply, staking, and burn metrics",
      width: 1280,
      height: 720,
    },
  },
});

export default function LuxTokenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
