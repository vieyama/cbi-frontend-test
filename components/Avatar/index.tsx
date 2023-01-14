import { AvatarWrapper } from "./styled";

interface IAvatarComponent {
  displayString: string;
  size?: string;
}
const AvatarComponent: React.FC<IAvatarComponent> = ({
  displayString,
  size,
}) => {
  return <AvatarWrapper size={size}>{displayString}</AvatarWrapper>;
};

export default AvatarComponent;
