import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";

export const metadata: Metadata = createMetadata({
  title: "Lux ICM Stats",
  description:
    "Comprehensive overview of Lux Interchain Messaging (ICM) statistics.",
  openGraph: {
    url: "/stats/icm",
    images: {
      alt: "Lux ICM Stats",
      url: "/api/og/stats?title=Lux ICM Stats&description=Comprehensive overview of Lux Interchain Messaging (ICM) statistics.",
      width: 1280,
      height: 720,
    },
  },
  twitter: {
    images: {
      alt: "Lux ICM Stats",
      url: "/api/og/stats?title=Lux ICM Stats&description=Comprehensive overview of Lux Interchain Messaging (ICM) statistics.",
      width: 1280,
      height: 720,
    },
  },
});

export default function ICMStatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
