import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { primary } from "../../styles/globalStyles";

const CommentIcon = (): JSX.Element => {
  return (
    <>
      <FontAwesomeIcon
        data-testid="comment"
        icon={faCommentDots}
        size="lg"
        color={primary}
      />
    </>
  );
};

export default CommentIcon;
