import { Metadata } from "next";
import { Suspense } from "react";
import ChainMetricsPage from "@/components/stats/ChainMetricsPage";

export const metadata: Metadata = {
  title: "All Chains Stats | Lux Ecosystem",
  description: "Track aggregated L1 activity across all Lux chains with real-time metrics including active addresses, transactions, gas usage, fees, and network performance data.",
  openGraph: {
    title: "All Chains Stats | Lux Ecosystem",
    description: "Track aggregated L1 activity across all Lux chains with real-time metrics including active addresses, transactions, gas usage, fees, and network performance data.",
    url: "/stats/network-metrics",
  },
};

export default function AllChainsStatsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ChainMetricsPage
        chainId="all"
        chainName="All Chains"
        chainSlug="network-metrics"
        description="Aggregated metrics and analytics across all Lux L1 chains"
        themeColor="#FFFFFF"
      />
    </Suspense>
  );
}

