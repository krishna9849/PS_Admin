import ThemeToggle from "../components/ThemeToggle";
import ThemeProvider from "../components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen flex items-center justify-center">
        <ThemeToggle />
      </main>
    </ThemeProvider>
  );
}
