import Tab from "@mui/material/Tab";
import Link from "next/link";

type NavbarTabProps = {
  label?: string;
  href: string;
  value?: number;
  handleTabClick: Function;
};

export default function NavbarTab(props: NavbarTabProps) {
  const { value, handleTabClick } = props;

  return (
    <Link href={props.href} passHref>
      <Tab
        component="a"
        label={props.label}
        value={props.value}
        onClick={() => handleTabClick(value)}
      />
    </Link>
  );
}
