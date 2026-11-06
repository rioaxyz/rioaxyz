import Footer from "../sections/footer";

/// Rioa's own pages share its footer. Product sites with their own look,
/// such as Loqui, live outside this group.
export default function RioaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
