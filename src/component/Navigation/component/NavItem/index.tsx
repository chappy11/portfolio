type Props = {
  name: string;
  url?: string;
};
export default function NavItem(props: Props) {
  const { name } = props;
  return <li className=" p-3 ">{name}</li>;
}
