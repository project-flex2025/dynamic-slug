export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="p-6">
        <header className="text-xl font-bold">Default Layout</header>
        <main>{children}</main>
      </div>
    );
  }
  