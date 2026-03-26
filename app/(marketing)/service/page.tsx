import type { Metadata } from "next";
import Service from "@/components/service/Service";

export const metadata: Metadata = {
  title: "businessdataguru - Enterprise Graded Web Scraping Services",
  description: "businessdataguru has complete service suite for web scraping. Get Clean and Comprehensive Data within 48 hours. Contact us to scale up your data handling ability.",
};

export default function ServicePage() {
  return <Service />;
}
