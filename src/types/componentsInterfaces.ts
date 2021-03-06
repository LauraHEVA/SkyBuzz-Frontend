export interface ButtonProps {
  actionOnClick?: () => void;
  text: string;
  className: string;
}

export interface TitleProps {
  title: string;
}

export interface ArrowPagesProps {
  actionOnClick: () => void;
  disabled: boolean;
  showSide: boolean;
}
