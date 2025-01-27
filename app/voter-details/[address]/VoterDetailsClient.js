// app/voter/[address]/VoterDetailsClient.js
'use client'

import { useEffect, useState, useContext } from 'react';
import { TeamDetail } from '@/Components';
import Loader from '@/components/Global/Loader';
import { VOTING_DAPP_CONTEXT } from '@/context/context';

export default function VoterDetailsClient({ address: voterAddress }) {
  const [candidate, setCandidate] = useState();

  const {
    loader,
    GET_SINGLE_VOTER,
    APPROVE_VOTER,
    address,
    OWNER_ADDRESS,
    REJECT_VOTER,
  } = useContext(VOTING_DAPP_CONTEXT);

  useEffect(() => {
    const fetchData = async () => {
      const items = await GET_SINGLE_VOTER(voterAddress);
      setCandidate(items);
    };
    
    fetchData();
  }, [voterAddress, GET_SINGLE_VOTER]);

  const approveVoter = async (address, message) => {
    await APPROVE_VOTER(address, message);
  };

  const rejectVoter = async (address, message) => {
    await REJECT_VOTER(address, message);
  };

  return (
    <>
      <TeamDetail
        candidate={candidate}
        path={"voter"}
        handleClickApprove={approveVoter}
        handleClickReject={rejectVoter}
        address={address}
        OWNER_ADDRESS={OWNER_ADDRESS}
      />
      {loader && <Loader />}
    </>
  );
}