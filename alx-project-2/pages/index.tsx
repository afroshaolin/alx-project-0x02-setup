import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// Welcome message section
const WelcomeSection = () => (
  <section className="flex flex-col items-center justify-center text-center max-w-xl w-full min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
      Welcome to StayEase
    </h1>
    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
      Discover and book unique places to stay, from cozy apartments to luxury villas. <br /> Your next adventure starts here.
    </p>
    <a
      href="#"
      className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-3 transition-colors shadow"
    >
      Start Exploring
    </a>
  </section>
)

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <WelcomeSection />
        <div className="grid grid-rows-1 grid-cols-3 gap-6 mb-6 items-center justify-items-center">
          <Image
            className="rounded shadow"
            src="/assets/images/Project Airbnb/Splash.png"
            alt="STAYEASE Home Image"
            width={400}
            height={300}
            priority
          />
              <Image
            className="rounded shadow"
            src="/assets/images/Project Airbnb/Sign In.png"
            alt="SubMain Image"
            width={300}
            height={200}
          />
        
          <Image
            className="rounded shadow"
            src="/assets/images/Project Airbnb/Home-1.png"
            alt="Main Image"
            width={300}
            height={200}
          />
      
          <Image
            className="rounded shadow"
            src="/assets/images/Project Airbnb/Home.png"
            alt="SubMain Image"
            width={300}
            height={200}
          />
        </div>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
        Click to Explore{" "}
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
          Lock a Location
        </code>
          </li>
          <li className="tracking-[-.01em]">
        Instant Property Viewing.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
        className="rounded-full border border-solid border-transparent transition-colors flex bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
          >
        <Image
          className="dark:invert"
          src="/assets/images/Project Airbnb/Splash.png"
          alt="Alx logomark"
          width={50}
          height={50}
        />
        Sign Up
          </a>
            <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            About Us
            </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Earn LoyaltyPoints
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Full Browser/Explorer Mode
        </a>
      </footer>
    </div>
  );
}
