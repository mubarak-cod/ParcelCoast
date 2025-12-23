
import { MdShoppingCart, MdFamilyRestroom, MdPeople, MdInfo, MdLocalOffer, MdStar } from "react-icons/md";

export const navItems = [
  {
    label: "Shop",
    icon: MdShoppingCart,
    links: [
      { name: "Buy for Myself", desc: "Ship Nigerian products abroad", icon: MdLocalOffer },
      { name: "Buy for Family", desc: "Deliver within Nigeria", icon: MdLocalOffer },
      { name: "Group Buying", desc: "Save together", icon: MdStar },
    ],
  },
  {
    label: "Family",
    icon: MdFamilyRestroom,
    links: [
      { name: "Family Dashboard", desc: "Manage family needs", icon: MdPeople },
      { name: "Wishlists", desc: "What they want", icon: MdStar },
      { name: "Emergency Support", desc: "Fast help", icon: MdLocalOffer },
    ],
  },
  {
    label: "Community",
    icon: MdPeople,
    links: [
      { name: "Group Savings", desc: "Collective power", icon: MdStar },
      { name: "Verified Vendors", desc: "Trusted sellers", icon: MdLocalOffer },
    ],
  },
  {
    label: "About",
    icon: MdInfo,
    links: [
      { name: "Our Story", desc: "Learn about us", icon: MdInfo },
      { name: "Mission & Vision", desc: "What drives us", icon: MdInfo },
      { name: "Team", desc: "Meet our people", icon: MdPeople },
    ],
  },
  {
    label: "Services",
    icon: MdLocalOffer,
    links: [
      { name: "International Shop", desc: "Ship products abroad", icon: MdShoppingCart },
      { name: "Family Care", desc: "Send to family", icon: MdFamilyRestroom },
      { name: "Local Market", desc: "Shop Nigeria", icon: MdLocalOffer },
    ],
  },
];
