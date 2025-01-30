'use client'; // Required for client-side hooks and interactivity

import { useEffect, useState, useContext } from "react";
import { useParams } from "next/navigation";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  TeamDetail,
} from "@/Components/index";
import Loader from "@/Components/Global/Loader";
import { VOTING_DAPP_CONTEXT } from "@/context/context";

const candidateDetails = () => {
  const params = useParams();
  const candidateAddress = params.address;

  const [candidate, setCandidate] = useState();
  const [user, setUser] = useState();
  const [votingTime, setVotingTime] = useState();
  const [currentVotingTime, setCurrentVotingTime] = useState();

  const {
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

      await ALL_VOTERS_VOTED();
      const votingStatus = await INITIAL_CONTRACT_DATA();
      setVotingTime(votingStatus);

      const nowInSeconds = Math.floor(Date.now() / 1000);
      setCurrentVotingTime(nowInSeconds);

      const address = await checkIfWalletIsConnected();
      if (address) {
        const user = await GET_SINGLE_VOTER(address);
        setUser(user);
      }
    };

    if (candidateAddress) fetchData();
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
        path={"candidate-details"}
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
};

export default candidateDetails;