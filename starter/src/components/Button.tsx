import { Link } from "react-router-dom";

export interface ButtonProps {
  title: string;
  link?: string;
}
const Button = ({ title, link }: ButtonProps) => {
  return (
    <Link to={link || '/'}>
      <button type="button">{title}</button>
    </Link>
  );
};

export default Button;
