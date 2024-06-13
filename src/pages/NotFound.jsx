import error from '../assets/error.avif';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <img src={error} alt="Error" className="w-96 h-96 mb-4" />
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl">Page not found</p>
    </div>
  );
}

