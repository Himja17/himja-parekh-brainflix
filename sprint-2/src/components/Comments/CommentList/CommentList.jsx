import CommentListItem from "../CommentListItem/CommentListItem";

const CommentList = ({ currentComments, handleVideoClick }) => {
  return (
    <div onClick={handleVideoClick}>
      {currentComments.comments.map((comment) => {
        return (
          <CommentListItem
            //   key={comment.id}
            id={comment.id}
            name={comment.name}
            comment1={comment.comment}
            timestamp={comment.timestamp}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
