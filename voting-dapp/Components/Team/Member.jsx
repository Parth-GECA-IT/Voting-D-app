import React from "react";

const Member = ({
  candidates,
  path,
  GIVE_VOTE,
  checkVote,
  votingTime,
  currentVotingTime,
  user,
}) => {
  console.log(path);
  return (
    <section class="team pt-120 pb-120 position-relative z-0">
      <div class="container">
        <div class="row gy-6">
          {candidates?.map((item, index) => (
            <div
              key={index + 1}
              class="new-custom-position col-sm-6 col-lg-4 col-xxl-3"
            >
              <div class="team__card nb3-bg cus-rounded-1 overflow-hidden">
                <div class="team__thumbs position-relative">
                  <img src={item?.image} alt="Image" class="w-100" />
                </div>
                <div class="team__content pseudo_element_after transition text-center py-6 py-lg-7 py-xxl-8 px-4 px-lg-5 px-xxl-6">
                  <a
                    href={
                      path == "candidate"
                        ? `/candidate-details?address=${item?.address} `
                        : `/voter-details?address=${item?.address} `
                    }
                  >
                    <h5 class="team__title d-center pb-4 mb-4 pseudo_element_after">
                      {item?._name}{" "}
                    </h5>
                  </a>
                  <p class="new-custom-top">
                    <strong>
                      {item?.status == 0
                        ? "Pending"
                        : item?.status == 1
                        ? "Approve"
                        : "Rejected"}
                    </strong>
                  </p>
                  <p class="mb-3">
                    When I first started trading But with time and experience.
                  </p>
                  {path == "candidate" &&
                    item?.status == 1 &&
                    user?.status == 1 &&
                    !user?.hasVoted &&
                    currentVotingTime >= votingTime?.startDateN &&
                    currentVotingTime <= votingTime?.endDateN && (
                      <>
                        <p>Total Vote: {item?.voteCount}</p>

                        <div class="custom-actions">
                          <a
                            class="custom-read"
                            onClick={() => GIVE_VOTE(item?.address)}
                          >
                            Give Vote
                          </a>
                        </div>
                      </>
                    )}

                  {path == "candidate" &&
                    item?.status == 1 &&
                    user?.hasVoted && (
                      <>
                        <p>Total Vote: {item?.voteCount}</p>

                        <div class="custom-actions">
                          <a class="custom-read">Already Voted</a>
                        </div>
                      </>
                    )}

                  {path == "candidate" && item?.status == 0 && (
                    <>
                      <div class="custom-actions">
                        <a class="custom-read">Status: Pending</a>
                      </div>
                    </>
                  )}

                  {path == "voter" && item?.status == 1 && (
                    <>
                      <div class="custom-actions">
                        <a class="custom-read">
                          {item?.hasVoted ? "Already Voted" : "Not Voted"}
                        </a>
                      </div>
                    </>
                  )}
                  {path == "voter" && item?.status == 0 && (
                    <>
                      <div class="custom-actions">
                        <a class="custom-read">Status: Pending</a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div class="col-12 mt-10 mt-lg-15 d-flex justify-content-center">
            <a
              href="#"
              class="cmn-btn py-2 py-lg-3 px-4 px-lg-6 gap-2 gap-lg-3 align-items-center"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
