// app/candidate/[address]/page.js
import CandidateDetailsClient from './CandidateDetailsClient';
import { Preloader, ScrollToTop, Cursor, Header, Footer } from '@/Components';

// Server Component by default
export default function CandidateDetailsPage({ params }) {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <CandidateDetailsClient address={params.address} />
      <Footer />
    </>
  );
}

// Generate metadata
export async function generateMetadata({ params }) {
  return {
    title: `Candidate Details - ${params.address}`,
    description: `Details for candidate ${params.address}`,
  };
}