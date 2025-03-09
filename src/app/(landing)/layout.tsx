import Header from "@/components/header";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="pb-[110px]">
        <Header />
      </div>
      {children}
    </main>
  );
}
