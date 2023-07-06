import Image from 'next/image';
import Link from 'next/link';
import NavMenuComp from '@/complements/components/NavMenu/NavMenuComp';
import ProfImage from '../public/images/AYRS.jpeg';
import GitImage from '../public/Icons/Git.webp'

export default function Home() {
  return (
    <>
      <main>
        <NavMenuComp/>
        <div className="flex flex-col items-center justify-between min-h-screen p-24">
          <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
            <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
                href="https://github.com/AlainYRS/alainyrs-portfolio-webapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                My{' '}
                <Image
                  src={GitImage}
                  alt="Git Logo"
                  className="dark:invert"
                  width={21}
                  height={21}
                  priority
                  />
                repo.
              </a>
            </div>
          </div>

          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-3xl"
              src={ProfImage}
              alt="Profile Image"
              width={140}
              height={35}
              priority
            />
          </div>

          <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              href="/portfolio"
              className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Portfolio{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                What I can do.
              </p>
            </a>

            <Link
              href="/skills"
              className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Skills{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                What I have learned.
              </p>
            </Link>
            
            <Link
              href="/experience"
              className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Experience{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Where I have worked.
              </p>
            </Link>


            <Link
              href="/about"
              className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                About{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                My journey.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
