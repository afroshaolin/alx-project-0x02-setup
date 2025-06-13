import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const WelcomeSection = () => (
  <section className="flex flex-col items-center text-center max-w-xl w-full min-h-screen p-8 gap-10 sm:p-20">
    <h1 className="text-3xl sm:text-4xl font-bold">Welcome to StayEase</h1>
    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
      Book unique stays, from cozy apartments to luxury villas.
    </p>
    <a
      href="#"
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-3 transition-colors shadow"
    >
      Start Exploring
    </a>
  </section>
);

const images = [
  { src: "/assets/images/Project Airbnb/Splash.png", alt: "Home", w: 400, h: 300 },
  { src: "/assets/images/Project Airbnb/Sign In.png", alt: "Sign In", w: 300, h: 200 },
  { src: "/assets/images/Project Airbnb/Home-1.png", alt: "Main", w: 300, h: 200 },
];

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-10 sm:p-20`}>
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <WelcomeSection />
        <div className="grid grid-cols-3 gap-6 mb-6">
          {images.map(img => (
            <Image key={img.alt} className="rounded shadow" {...img} alt={img.alt} priority />
          ))}
        </div>
        <ol className="list-decimal text-sm text-center sm:text-left font-mono">
          <li>Click to Explore <code className="bg-black/5 dark:bg-white/6 px-1 py-0.5 rounded font-semibold">Lock a Location</code></li>
          <li>Instant Property Viewing</li>
        </ol>
        <div className="flex gap-4 flex-col sm:flex-row items-center">
          <a
            className="rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 flex items-center gap-2"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="dark:invert" src="/assets/images/Project Airbnb/Splash.png" alt="Alx logomark" width={32} height={32} />
            Sign Up
          </a>
          <a
            className="rounded-full border border-black/10 dark:border-white/20 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {[
          { href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app", icon: "/file.svg", text: "LoyaltyPoints" },
          { href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app", icon: "/window.svg", text: "Examples" },
          { href: "https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app", icon: "/globe.svg", text: "Browser Mode" },
        ].map(link => (
          <a key={link.text} className="flex items-center gap-2 hover:underline" href={link.href} target="_blank" rel="noopener noreferrer">
            <Image aria-hidden src={link.icon} alt="" width={16} height={16} />
            {link.text}
          </a>
        ))}
      </footer>
    </div>
  );
}
