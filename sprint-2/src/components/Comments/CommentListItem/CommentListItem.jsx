import "./CommentListItem.scss";
import dateConvertor from "../../../timestamp";

const CommentListItem = ({ name, comment1, timestamp }) => {
  return (
    <div className="commentlist__main">
      <div className="commentlist__image--container">
        {/* for image placeholder */}
      </div>

      <div className="commentlist__name--container">
        <h2 className="commentlist__name">{name}</h2>
        <p className="commentlist__para">{comment1}</p>
      </div>
      <div className="commentlist__timestamp--container">
        <p className="commentlist__timestamp">{dateConvertor(timestamp)}</p>
      </div>
    </div>
  );
};

export default CommentListItem;
