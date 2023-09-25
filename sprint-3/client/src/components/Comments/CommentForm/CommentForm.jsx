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
                
                id="comment__form"
                cols="30"
                rows="6"
                placeholder="Add a new comment"
                className="commentform__textarea"
                
               
              ></textarea>

              <button name="comment" className="commentform__comment--button">
                COMMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
