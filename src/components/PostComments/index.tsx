import { FormEvent, useState } from "react";
import styles from "./PostComments.module.css";

import Comment from "../../models/Comment";

const Post = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [tempComment, setTempComment] = useState("");

  function handleAddComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(tempComment);
    const newComment = new Comment(comments.length, tempComment);

    if (tempComment.trim() !== "") {
      // Para não haver comentarios vazios no Post!
      setTempComment("");
      setComments([...comments, newComment]);
    }
  }

  return (
    <div>
      <ul className={styles["post-comments"]}>
        {comments.map(({ comment, id }) => (
          <li data-testid="comment" className={styles["post-comment"]} key={id}>
            <p className={styles["post-comment-content"]}>{comment}</p>
          </li>
        ))}
      </ul>

      <form
        data-testid="comment-form"
        onSubmit={handleAddComment}
        className={styles["post-comments-form"]}
      >
        <textarea
          id="TextComment"
          value={tempComment}
          data-testid="comment-input"
          onChange={(e) => setTempComment(e.target.value)}
          required
          className={styles["post-comments-form-textarea"]}
        />
        <button
          id="ButtonComment"
          type="submit"
          className={styles["post-comments-form-button"]}
        >
          Comentar
        </button>
      </form>
    </div>
  );
};

export default Post;
