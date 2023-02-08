import { useMemo } from "react";

type Props = {
  name: string;
  url?: string;
};
export default function NavItem(props: Props) {
  const { name } = props;

  return (
    <li className="p-5 md:p-8 lg:p-12 text-lg hover:text-orange-400 font-bold cursor-pointer text-white">
      {name}
    </li>
  );
}
