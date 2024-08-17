import GarlicBreadImage from "../../../public/garlic_bread.jpg";
import Image from "next/image";

export default function GarlicBread() {
	return <Image src={GarlicBreadImage} alt="garlic bread" />
}