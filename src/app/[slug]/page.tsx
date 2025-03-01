"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import componentMapper from "@/utils/componentMapper";
import MainLayout from "@/layouts/MainLayout";
import DefaultLayout from "@/layouts/DefaultLayout";
import Dashboard from "@/components/Dashboard";

const layouts: Record<string, React.FC<{ children: React.ReactNode }>> = {
  MainLayout,
  DefaultLayout,
};

interface PageData {
  path: string;
  layout: string;
  components: { type: string; props: any }[];
}

export default function DynamicPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [routes, setRoutes] = useState<PageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch("/data/routes.json");
        const data = await response.json();
        setRoutes(data.routes || []);
      } catch (error) {
        console.error("Error loading routes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  const pageData = routes.find((route) => route.path === `/${slug}`);

  if (!pageData) return <h1>404 - Page Not Found</h1>;

  const Layout = layouts[pageData.layout] || DefaultLayout;

  return (
    <>
      {slug == "dashboard" ? (
        <Dashboard page={pageData} />
      ) : (
        <Layout>
          {pageData.components.map((comp, index) => {
            const Component = componentMapper[comp.type];
            return Component ? <Component key={index} {...comp.props} /> : null;
          })}
        </Layout>
      )}
    </>
  );
}
