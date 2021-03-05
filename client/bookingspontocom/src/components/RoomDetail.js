import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import TextAreaInput from "./TextAreaInput";
import Review from "./Review";

function RoomDetail() {
  const [detailed, setDetailed] = useState({
    name: "",
    description: "",
    imageUrl: "",
    reviews: [],
  });

  //   const [reviewreturn, setReviewreturn] = useState({
  //     reviewComment: [],
  //   });

  //   const [newreview, setNewreview] = useState({
  //       comment: ""
  //   })

  const { id } = useParams();

  useEffect(() => {
    async function fetchroomDetails() {
      const response = await axios.get(`http://localhost:4000/room/${id}`);
      console.log(response);
      setDetailed({ ...response.data });
    }
    fetchroomDetails();
  }, [id]);

  //   useEffect(() => {
  //     async function fetchroomReviews() {
  //       const responseReview = await axios.get(
  //         `http://localhost:4000/room/${id}/review`
  //       );

  //       console.log(responseReview);
  //       setReviewreturn({ ...responseReview.data });
  //     }
  //     fetchroomReviews();
  //   }, [id]);
  //   console.log(detailed.reviews);
  //   console.log(reviewreturn.reviewComment);

  return (
    <div className="container" style={{ width: 650 }}>
      <img src={detailed.imageUrl} className="card-img-top" alt="Hotel room" />
      <div>
        <h5>{detailed.name}</h5>
        <p>{detailed.description}</p>
        {/* {reviewreturn.reviewComment.map((element) => (
          <p>{element}</p>
        ))} */}
        {/* <Review /> */}
        {/* <p>{detailed.reviews}</p> */}
        <ul></ul>
        {detailed.reviews.map((element) => (
          <p>{element.comment}</p>
        ))}
        <button className="btn btn-light">Leave a review</button>
      </div>
    </div>
  );
}

export default RoomDetail;
