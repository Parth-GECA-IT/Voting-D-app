// app/register-voters/page.js
import { Preloader, ScrollToTop, Cursor, Header, Footer } from '@/Components';
import RegisterVotersClient from './RegisterVotersClient';

// Server Component by default
export default function RegisterVotersPage() {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <RegisterVotersClient />
      {/* Loader will be handled in client component */}
      <Footer />
    </>
  );
}

// Generate metadata
export async function generateMetadata() {
  return {
    title: 'Register Voters',
    description: 'Register and manage voters for the voting system',
  };
}