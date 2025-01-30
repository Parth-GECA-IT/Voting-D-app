// app/candidate/[address]/CandidateDetailsClient.js
'use client';

import { useEffect, useState, useContext } from "react";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  TeamDetail,
} from "@/Components"; // Update import path
import Loader from "@/components/Global/Loader";
import { VOTING_DAPP_CONTEXT } from "@/context/context";

export function CandidateDetailsClient({ initialData, address: candidateAddress }) {
  const [candidate, setCandidate] = useState();
  const [user, setUser] = useState();
  const [votingTime, setVotingTime] = useState();
  const [currentVotingTime, setCurrentVotingTime] = useState();

  const {
    notifySuccess,
    notifyError,
    setLoader,
    loader,
    address,
    VOTING_DAPP,
    checkIfWalletIsConnected,
    GET_SINGLE_CANDIDATE,
    APPROVE_CANDIDATE,
    GIVE_VOTE,
    OWNER_ADDRESS,
    ALL_VOTERS_VOTED,
    checkVote,
    REJECT_CANDIDATE,
    GET_SINGLE_VOTER,
    INITIAL_CONTRACT_DATA,
  } = useContext(VOTING_DAPP_CONTEXT);

  useEffect(() => {
    const fetchData = async () => {
      const items = await GET_SINGLE_CANDIDATE(candidateAddress);
      setCandidate(items);

      const allVotedVoter = await ALL_VOTERS_VOTED();
      
      const votingStatus = await INITIAL_CONTRACT_DATA();
      setVotingTime(votingStatus);

      const nowInMilliseconds = Date.now();
      const nowInSeconds = Math.floor(nowInMilliseconds / 1000);
      setCurrentVotingTime(nowInSeconds);

      const walletAddress = await checkIfWalletIsConnected();

      if (walletAddress) {
        const userData = await GET_SINGLE_VOTER(walletAddress);
        setUser(userData);
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
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
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
      <Footer />
    </>
  );
}