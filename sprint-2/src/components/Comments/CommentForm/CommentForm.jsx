import "./CommentForm.scss";
import avatar from "../../../assets/Images/Mohan-muruge.jpg";

function CommentForm() {
  return (
    <div className="commentform">
      <h3 className="commentform__listnumber">3 Comments</h3>
      <div className="commentform__container">
        <img src={avatar} alt="" className="commentform__avatar" />
        <div>
          <h2 className="commentform__title">JOIN THE CONVERSATION</h2>
          <div className="commentform__sub-container">
            <form method="GET">
              <textarea
                name="comment"
                id="comment__form"
                cols="40"
                rows="6"
                placeholder="Add a new comment"
                className="commentform__textarea"
              ></textarea>
            </form>
            <input
              type="button"
              name="comment"
              value={"COMMENT"}
              className="commentform__comment--button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
