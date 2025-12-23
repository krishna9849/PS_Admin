import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
        {children}
      </body>
    </html>
  );
}
