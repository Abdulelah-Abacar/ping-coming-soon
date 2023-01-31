import logo from './images/logo.svg';
import illustration from './images/illustration-dashboard.png';
import { useState } from 'react';
/*
  We are launching soon!

  Subscribe and get notified

  Notify Me

  &copy; Copyright Ping. All rights reserved.
*/
function App() {
  const [email, setEmail] = useState(null);

  const handleChange = e => setEmail(e.target.value)

  const handleSubmit = e => {
    e.preventDefault();

    const isValidEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

    if (!email && !isValidEmail.test(email)) {
      const inp = document.querySelector(`input[name=email]`);
      inp.parentElement.firstElementChild.classList.remove('err');
      inp.parentElement.firstElementChild.classList.add('empty');
    } else if (email && !isValidEmail.test(email)) {
      const inp = document.querySelector(`input[name=email]`);
      inp.parentElement.firstElementChild.classList.remove('empty');
      inp.parentElement.firstElementChild.classList.add('err');
    } else {
      const inp = document.querySelector(`input[name=email]`);
      inp.parentElement.firstElementChild.classList.remove('err', 'empty');
    }
  }

  return (
    <main className="font-LF w-full min-h-screen grid place-content-center">
      <div className="container py-6">
        <div className='mx-auto w-80 sm:w-11/12 md:w-4/5 lg:w-3/5 max-w-6xl bg-rd-300'>
          <header className='my-12'>
            <div className='mx-auto w-fit'>
              <img src={logo} alt="logo" />
            </div>
          </header>
          <section className='grid place-content-center gap-10 md:gap-16'>
            <div className='text-center'>
              <h1 className='text-2xl sm:text-3xl md:text-5xl font-light text-gray-400'>We are launching <b className='font-bold text-black'>soon!</b></h1>
              <p className='mt-3'>Subscribe and get notified</p>
              <form onSubmit={handleSubmit} className='md:flex items-start justify-center gap-5 mt-8'>
                <div className='flex flex-col grow'>
                  <div className='peer'/>
                  <input name='email' onChange={handleChange} className='py-2 px-6 rounded-full border border-gray-300 peer-[.err]:border-red-400 peer-[.empty]:border-red-400 outline-none placeholder:text-sm' type="text" placeholder='Your email address' />
                  <small className='hidden mt-1 peer-[.empty]:inline text-red-400'>Whoops! It looks like you forgot to add your email</small>
                  <small className='hidden mt-1 peer-[.err]:inline text-red-400'>Please provide a valid email address</small>
                </div>
                <div>
                  <button type='submit' className='mt-4 md:mt-0 w-full py-2 px-12 rounded-full text-white bg-blue-600 font-semibold cursor-pointer shadow-small shadow-blue-600/50'>Notify Me</button>
                </div>
              </form>
            </div>
            <div>
              <img src={illustration} alt="hero" />
            </div>
          </section>
          <footer className='text-center mt-12'>
            <div className='flex gap-6 justify-center'>
              <div className='text-blue-600'><i className="fa-brands fa-facebook-f"></i></div>
              <div className='text-blue-600'><i className="fa-brands fa-twitter"></i></div>
              <div className='text-blue-600'><i className="fa-brands fa-instagram"></i></div>
            </div>
            <p className='text-gray-400 mt-4'>&copy; Copyright Ping. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </main>
  )
}

export default App
