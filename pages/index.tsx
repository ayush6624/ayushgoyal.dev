import dynamic from 'next/dynamic';

const Model = dynamic(() => import('@/components/Model'), { ssr: false });

export default function Index() {
  return (
    <main className="flex flex-col justify-center mx-auto max-w-2xl w-full gap-8 p-5 m-[80px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Hi</h2>
        <p>
          I am Ayush. I am a sofware engineer working at{' '}
          <a href="https://pabio.com/" target="_blank">
            Pabio (YC S21)
          </a>
          . I'm a senior at DTU (formerly DCE), New Delhi, India. Currently, I'm
          working on some side projects.
        </p>
        <p>
          Checkout my{' '}
          <span>
            <a
              href="https://github.com/ayush6624"
              target="_blank"
              className="font-mono text-blue-500 underline underline-offset-2"
            >
              <code>github.com/ayush6624</code>
            </a>
          </span>{' '}
          and{' '}
          <span>
            <a
              href="https://www.linkedin.com/in/ayush-goyal6624/"
              target="_blank"
              className="font-mono text-blue-500 underline underline-offset-2"
            >
              {' '}
              LinkedIn
            </a>
            .
          </span>
        </p>
      </div>
      <div>
        <h2 className="text-4xl font-bold">Experience</h2>
        <ul>
          <li>
            <a href="https://pabio.com/" target="_blank">
              Microsoft
            </a>
          </li>
          <li>
            <a href="https://pabio.com/" target="_blank">
              Pabio (YC S21)
            </a>
          </li>
        </ul>
      </div>
      <div className="h-[500px]">
        <Model />
      </div>
    </main>
  );
}
