import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
import Education from "./Components/Education";

export const metadata = {
  title: "Shailavi Srivastava Portfolio",
  description: "My personal portfolio website",
};

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-indigo-400 to-purple-300 min-h-screen flex flex-col font-inter">
      {/* Header stays full width */}
      <Header />

      {/* Main Content */}
      <main className="bg-indigo-50 rounded-t-3xl px-4 sm:px-6 py-10 flex-grow max-w-6xl mx-auto w-full">
        {/* All sections are stacked vertically and centered */}
        <About />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
