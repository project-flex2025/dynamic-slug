import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import componentMapper from "@/utils/componentMapper";
import MainLayout from "@/layouts/MainLayout";
import DefaultLayout from "@/layouts/DefaultLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import Dashboard from "@/components/Dashboard";

// Define layouts mapping
const layouts: Record<string, React.FC<{ children: React.ReactNode }>> = {
  MainLayout,
  DefaultLayout,
  DashboardLayout,
};

// **✅ Ensure params type matches Next.js expectations**
interface PageParams {
  slug: string;
}

// **✅ Explicitly define correct type for props**
interface PageProps {
  params: PageParams;
}

// Load JSON data (server-side)
const getRoutes = () => {
  const filePath = path.join(process.cwd(), "src/data/routes.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents).routes;
};

// **✅ Ensure params type is correctly inferred**
export default function DynamicPage({ params }: any) {
  const routes = getRoutes();

  // Ensure params.slug exists and is a string
  if (!params?.slug || typeof params.slug !== "string") {
    return notFound();
  }

  const pageData = routes.find(
    (route: any) =>
      route.path === `/${params.slug}` ||
      (params.slug === "index" && route.path === "/")
  );

  if (!pageData) return notFound();
  const Layout = layouts[pageData.layout] || DefaultLayout;

  return (
    <>
      {params.slug === "dashboard" ? (
        <Dashboard page={pageData} />
      ) : (
        <Layout>
          {pageData.components.map((comp: any, index: number) => {
            const Component = componentMapper[comp.type];
            return Component ? <Component key={index} {...comp.props} /> : null;
          })}
        </Layout>
      )}
    </>
  );
}

// **✅ Explicitly define generateStaticParams for correct SSG behavior**
export async function generateStaticParams(): Promise<PageParams[]> {
  const routes = getRoutes();
  return routes.map((route: any) => ({ slug: route.path.replace("/", "") }));
}
