// app/register-voters/RegisterVotersClient.js
'use client'

import { useEffect, useState, useContext } from 'react';
import { Team } from '@/Components';
import Loader from '@/Components/Global/Loader';
import { VOTING_DAPP_CONTEXT } from '@/context/context';

// Helper function for filtering users
function filterUsersByStatus(users, status) {
  return users?.filter((user) => user.status === status);
}

export default function RegisterVotersClient() {
  const [candidates, setCandidates] = useState();
  const [votingTime, setVotingTime] = useState();
  const [currentVotingTime, setCurrentVotingTime] = useState();
  const [user, setUser] = useState();

  const {
    loader,
    GET_REGISTER_CANDIDATES,
    GIVE_VOTE,
    ALL_VOTERS_VOTED,
    checkVote,
    INITIAL_CONTRACT_DATA,
    GET_SINGLE_VOTER,
    checkIfWalletIsConnected,
  } = useContext(VOTING_DAPP_CONTEXT);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get all registered candidates
        const allCandidates = await GET_REGISTER_CANDIDATES();
        
        // Get all voted voters
        await ALL_VOTERS_VOTED();

        // Filter approved candidates
        const approvedCandidates = filterUsersByStatus(allCandidates, 1);
        setCandidates(approvedCandidates);

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
  }, []);

  return (
    <>
      <Team
        candidates={candidates}
        path={"candidate"}
        GIVE_VOTE={GIVE_VOTE}
        checkVote={checkVote}
        votingTime={votingTime}
        currentVotingTime={currentVotingTime}
        user={user}
      />
      {loader && <Loader />}
    </>
  );
}