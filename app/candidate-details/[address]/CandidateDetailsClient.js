// app/candidate/[address]/CandidateDetailsClient.js
'use client'

import { useEffect, useState, useContext } from 'react';
import { TeamDetail } from '@/Components';
import Loader from '@/components/Global/Loader';
import { VOTING_DAPP_CONTEXT } from '@/context/context';

export default function CandidateDetailsClient({ address: candidateAddress }) {
  const [candidate, setCandidate] = useState();
  const [user, setUser] = useState();
  const [votingTime, setVotingTime] = useState();
  const [currentVotingTime, setCurrentVotingTime] = useState();

  const {
    loader,
    address,
    GET_SINGLE_CANDIDATE,
    APPROVE_CANDIDATE,
    GIVE_VOTE,
    OWNER_ADDRESS,
    ALL_VOTERS_VOTED,
    checkVote,
    REJECT_CANDIDATE,
    GET_SINGLE_VOTER,
    INITIAL_CONTRACT_DATA,
    checkIfWalletIsConnected
  } = useContext(VOTING_DAPP_CONTEXT);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get candidate details
        const candidateData = await GET_SINGLE_CANDIDATE(candidateAddress);
        setCandidate(candidateData);

        // Get all voted voters
        await ALL_VOTERS_VOTED();

        // Get voting status
        const votingStatus = await INITIAL_CONTRACT_DATA();
        setVotingTime(votingStatus);

        // Set current time
        const nowInSeconds = Math.floor(Date.now() / 1000);
        setCurrentVotingTime(nowInSeconds);

        // Get user details if wallet is connected
        const userAddress = await checkIfWalletIsConnected();
        if (userAddress) {
          const userData = await GET_SINGLE_VOTER(userAddress);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [candidateAddress]);

  const approveCandidate = async (address, message) => {
    await APPROVE_CANDIDATE(address, message);
  };

  const rejectCandidate = async (address, message) => {
    await REJECT_CANDIDATE(address, message);
  };

  return (
    <>
      <TeamDetail
        candidate={candidate}
        path={"candidate"}
        handleClickApprove={approveCandidate}
        handleClickReject={rejectCandidate}
        GIVE_VOTE={GIVE_VOTE}
        OWNER_ADDRESS={OWNER_ADDRESS}
        address={address}
        checkVote={checkVote}
        user={user}
        votingTime={votingTime}
        currentVotingTime={currentVotingTime}
      />
      {loader && <Loader />}
    </>
  );
}