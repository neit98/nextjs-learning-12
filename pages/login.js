import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

function Login(props) {
  const { providers } = props;

  return (
    <div className='flex flex-col items-center bg-black justify-center min-h-screen w-full'>
      <img
        className='w-52 mb-5'
        src='https://links.papareact.com/9xl'
        alt='spotify'
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className='bg-[#18d860] text-white p-5 rounded-lg'
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
