export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="p-6 bg-gray-100">
        <header className="text-xl font-bold">Main Layout</header>
        <main>{children}</main>
      </div>
    );
  }
  