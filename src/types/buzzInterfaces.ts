export interface BuzzBasic {
  topic: string;
  text: string;
}

export interface Author {
  id: string;
  name: string;
  username: string;
}

export interface BuzzProps {
  buzz: BuzzObject;
  onClickTrash: React.MouseEventHandler;
  onClickHeart: React.MouseEventHandler;
}
export interface BuzzObject extends BuzzBasic {
  likes: number;
  comments: BuzzCommentInterface[];
  date: string;
  id: string;
  author: Author;
}

export interface BuzzCommentInterface extends BuzzBasic {
  likes: number;
  date: string;
  id: string;
  author: Author;
  comments: BuzzCommentInterface[];
}

export interface BuzzCommentProps {
  buzz: BuzzCommentInterface;
}
