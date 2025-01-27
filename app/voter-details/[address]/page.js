// app/voter/[address]/page.js
import VoterDetailsClient from './VoterDetailsClient';
import { Preloader, ScrollToTop, Cursor, Header, Footer } from '@/Components';

// This is a Server Component by default
export default function VoterDetailsPage({ params }) {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <VoterDetailsClient address={params.address} />
      <Footer />
    </>
  );
}

// Optionally generate metadata
export async function generateMetadata({ params }) {
  return {
    title: `Voter Details - ${params.address}`,
    description: `Details for voter ${params.address}`,
  };
}