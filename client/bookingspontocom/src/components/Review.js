import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Review() {
  const [review, setReview] = useState({
    reviewComment: [],
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchroomReviews() {
      const responseReview = await axios.get(
        `http://localhost:4000/room/${id}/review`
      );

      console.log(responseReview);
      setReview({ ...responseReview.data });
    }
    fetchroomReviews();
  }, [id]);

  return <p>{review.reviewComment}</p>;
}

export default Review;
