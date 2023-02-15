import React, { useReducer } from "react";
import { Link } from "react-router-dom";

/// Image
import profile01 from "../../../../images/profile/1.jpg";
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile08 from "../../../../images/profile/8.jpg";
import profile from "../../../../images/profile/profile.png";
import { Dropdown, Button, Modal } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";
import PageTitle from "../../../layouts/PageTitle";

const initialState = false;
const reducer = (state, action) => {
  switch (action.type) {
    case "sendMessageOpen":
      return { ...state, sendMessage: true };
    case "sendMessageClose":
      return { ...state, sendMessage: false };

    default:
      return state;
  }
};

const PostDetails = () => {
  //const [sendMessage, setSendMessage] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log('state');
  //console.log(state);

  const options = {
    settings: {
      overlayColor: "#000000",
    },
  };
  return (
    <div>
      <div>
        <PageTitle
          activeMenu="Post Details"
          motherMenu="Advanced"
          pageContent="Post Details"
        />
        {/* row */}
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body">
                <div className="post-details">
                  <h3 className="mb-2 text-black">
                    Upload the answer and let the best mentor answer it
                  </h3>

                  <ul className="mb-4 post-meta d-flex flex-wrap">
                    <li className="post-author me-3">By Admin</li>
                    <li className="post-date me-3">
                      <i className="far fa-calendar-plus me-2" />
                      18 May 2022
                    </li>
                    <li className="post-comment">
                      <i className="far fa-comment me-2" /> 28
                    </li>
                  </ul>

                  <img
                    src={profile08}
                    alt=""
                    className="img-fluid mb-3 w-100 rounded"
                  />
                  <p>
                    A wonderful serenity has take possession of my entire soul
                    like these sweet morning of spare which enjoy whole heart.A
                    wonderful serenity has take possession of my entire soul
                    like these sweet morning of spare which enjoy whole heart.
                  </p>
                  <p>
                    A collection of textile samples lay spread out on the table
                    - Samsa was a travelling salesman - and above it there hung
                    a picture that he had recently cut out of an illustrated
                    magazine and housed in a nice, gilded frame.
                  </p>
                  <blockquote>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Has been the industry's standard text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimencenturies.
                  </blockquote>
                  <p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence was
                    created for the bliss of souls like mine.I am so happy, my
                    dear friend, so absorbed in the exquisite sense of mere
                    tranquil existence, that I neglect my talents.
                  </p>
                  <div className="profile-skills mt-5 mb-5">
                    <h4 className="text-primary mb-2">Skills</h4>
                    <Link
                      to="/post-details"
                      className="btn btn-primary light btn-xs mb-1 me-1"
                    >
                      Admin
                    </Link>
                    <Link
                      to="/post-details"
                      className="btn btn-primary light btn-xs mb-1 me-1"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/post-details"
                      className="btn btn-primary light btn-xs mb-1 me-1"
                    >
                      Photoshop
                    </Link>
                    <Link
                      to="/post-details"
                      className="btn btn-primary light btn-xs mb-1 me-1"
                    >
                      Bootstrap
                    </Link>
                    <Link
                      to="/post-details"
                      className="btn btn-primary light btn-xs mb-1 me-1"
                    >
                      Responsive
                    </Link>
                    <Link
                      to="/post-details"
                      className="btn btn-primary light btn-xs mb-1 me-1"
                    >
                      Crypto
                    </Link>
                  </div>
                  <div className="comment-respond" id="respond">
                    <h4
                      className="comment-reply-title text-primary mb-3"
                      id="reply-title"
                    >
                      Leave a Reply{" "}
                    </h4>
                    <form
                      className="comment-form"
                      id="commentform"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group mb-3">
                            <label
                              htmlFor="author"
                              className="text-black font-w600"
                            >
                              Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Author"
                              name="Author"
                              placeholder="Author"
                              id="author"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-3">
                            <label
                              htmlFor="email"
                              className="text-black font-w600"
                            >
                              Email <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Email"
                              placeholder="Email"
                              name="Email"
                              id="email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-3">
                            <label
                              htmlFor="comment"
                              className="text-black font-w600"
                            >
                              Comment
                            </label>
                            <textarea
                              rows={8}
                              className="form-control"
                              name="comment"
                              placeholder="Comment"
                              id="comment"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Post Comment"
                              className="submit btn btn-primary"
                              id="submit"
                              name="submit"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
