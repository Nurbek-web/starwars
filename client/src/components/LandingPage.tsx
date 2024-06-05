import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#0b0c10] text-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Explore the Star Wars Universe
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl dark:text-gray-400">
                    Discover the rich history, characters, and locations of the
                    iconic Star Wars galaxy. Dive deep into the lore and immerse
                    yourself in the epic saga.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffd700] px-8 text-sm font-medium text-[#0b0c10] shadow transition-colors hover:bg-[#ffde00] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore the App
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1b1c1e] text-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#ffd700] px-3 py-1 text-sm text-[#0b0c10]">
                    Characters
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Iconic Heroes and Villains
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Explore the diverse cast of characters that have captivated
                    audiences for generations. From the heroic Jedi to the
                    cunning Sith, each character has a unique story to tell.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffd700] px-8 text-sm font-medium text-[#0b0c10] shadow transition-colors hover:bg-[#ffde00] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Characters
                </Link>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Characters"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0b0c10] text-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Planets"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#ffd700] px-3 py-1 text-sm text-[#0b0c10]">
                    Planets
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Diverse Worlds of the Galaxy
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Discover the rich and varied planets that make up the Star
                    Wars galaxy. From the desert world of Tatooine to the lush
                    forests of Endor, each planet has its own unique history and
                    culture.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffd700] px-8 text-sm font-medium text-[#0b0c10] shadow transition-colors hover:bg-[#ffde00] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Planets
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1b1c1e] text-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-[#ffd700] px-3 py-1 text-sm text-[#0b0c10]">
                    Spaceships
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Iconic Vessels of the Galaxy
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Explore the vast array of spaceships that have become
                    legendary in the Star Wars universe. From the sleek
                    Millennium Falcon to the powerful Star Destroyers, each
                    vessel has a unique story and role to play in the epic saga.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#ffd700] px-8 text-sm font-medium text-[#0b0c10] shadow transition-colors hover:bg-[#ffde00] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ffd700] disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Spaceships
                </Link>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Spaceships"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#0b0c10] text-gray-50">
        <p className="text-xs text-gray-400">
          &copy; 2024 Star Wars Explorer. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
