import React from 'react';
import {useRouter} from 'next/router';

const Index = () => {
  const router = useRouter();
  const technologies = [
    'JavaScript',
    'Node',
    'Express',
    'MongoDB',
    'MySQL',
    'React',
    'Next',
    'Material-UI',
    'Tailwind',
    'Github',
    'HTML',
    'CSS',
  ];

  const projects = [
    {
      name: 'IVR Studio',
      description:
        'Visual IVR development tool designed to enhance the customer experience in contact centers. It enables both developers and business users to effortlessly create and manage IVR systems.',
      technologies: [
        'React.js',
        'Node.js',
        'Canvas',
        'MongoDB',
        'Next.js',
        'Material-UI',
      ],
      link: 'https://github.com/irfanalamt/ivr-dev-interface',
    },
    {
      name: 'ShopMERN',
      description:
        'Containerized e-commerce application featuring a React.js based front end, a Node.js backend, and designed using MaterialUI.',
      technologies: [
        'React.js',
        'Express.js',
        'MongoDB',
        'Docker',
        'Material-UI',
      ],
      link: 'https://github.com/irfanalamt/node-ecom-restapi',
    },
    {
      name: 'Trending Words',
      description:
        'Simple web app that fetches trending news headlines from an API, analyzes their sentiment using NLP, and shows color-coded scores.',
      technologies: [
        'React.js',
        'Next.js',
        'News-API',
        'NLP.js',
        'Material-UI',
      ],
      link: 'https://github.com/irfanalamt/trending-words-API',
    },
  ];

  return (
    <div className='font-sans antialiased text-gray-900 bg-slate-100 min-h-screen flex flex-col'>
      <header className='py-6 bg-gray-50 shadow'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            {`Hi, I'm Irfan. 👋🏽`}
          </h1>
          <p className='mt-1 max-w-2xl  text-sm lg:text-lg text-gray-500'>
            A Full Stack Developer with specialization in cloud computing,
            graphical tool and workflow development. My expertise spans across
            diverse technologies and programming languages including Node.js,
            React.js and more.
          </p>
        </div>
      </header>
      <main className='flex-grow'>
        <div className='max-w-7xl mx-auto py-6  sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-bold pl-3 sm:pl-0 leading-tight text-gray-900'>
            Skills
          </h2>
          <ul className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 mt-4 px-2 sm:px-0'>
            {technologies.map((tech, index) => (
              <li
                key={index}
                className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'>
                <div className='flex-1 flex flex-col py-4 hover:bg-gray-100 transition duration-300'>
                  <h3 className='text-gray-900 text-sm font-medium'>
                    <img
                      src={`images/${tech}.png`}
                      alt='Tech Icon'
                      className='inline-block w-6 h-6 mr-2'
                    />
                    {tech}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
          <h2 className='text-2xl font-bold pl-3 sm:pl-0  leading-tight text-gray-900 mt-6'>
            Projects
          </h2>
          <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4'>
            {projects.map((project, index) => (
              <li
                key={index}
                className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow mx-2 sm:mx-0 transition duration-200 hover:shadow-lg hover:scale-105'>
                <div className='flex-1 flex flex-col py-4'>
                  <h3 className='text-gray-900 text-md font-medium'>
                    {project.name}
                  </h3>
                  <dl className='p-2 flex-grow flex flex-col justify-between'>
                    <dt className='sr-only'>Description</dt>
                    <dd className='text-gray-500 text-sm'>
                      {project.description}
                    </dd>
                    <dt className='sr-only'>Technologies Used</dt>
                    <dd className='mt-3'>
                      <span className='text-gray-500 text-sm'>Tech Stack:</span>
                      <ul className='text-gray-700 text-sm flex justify-center flex-wrap'>
                        {project.technologies.map((tech, techIndex) => (
                          <li key={techIndex} className='mr-2'>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </dl>
                </div>
                <div className='flex justify-center pb-4'>
                  <button
                    onClick={() => router.push(project.link)}
                    className='py-2 px-4 rounded-md text-white bg-indigo-500 hover:bg-indigo-600 transition duration-300'>
                    Open
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h2 className='text-2xl font-bold pl-3 sm:pl-0  leading-tight text-gray-900 mt-6'>
            Contact Me
          </h2>
          <div className='mt-2 px-3 sm:px-0'>
            <p className='text-gray-600'>
              Eager to leverage my skills for mutual growth at a dynamic
              organization. Reach out if my profile aligns with an opportunity.
            </p>
            <a
              href='mailto:irfanalamt@gmail.com'
              className='mt-2 text-blue-600 hover:text-blue-500'>
              irfanalamt@gmail.com
            </a>
            <div className='mt-4'>
              <button
                onClick={() =>
                  router.push('https://www.linkedin.com/in/irfanalamt/')
                }
                className='py-1.5 px-4  rounded-md  text-white bg-indigo-500 hover:bg-indigo-600 mr-4'>
                LinkedIn
              </button>
              <button
                onClick={() => router.push('https://github.com/irfanalamt')}
                className='py-1.5 px-4  rounded-md  text-white bg-indigo-500 hover:bg-indigo-600'>
                Github
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
