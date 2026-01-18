import {
  Wrench,
  Package,
  PhoneCall,
  Repeat,
} from "lucide-react";

export const servicehighlights = [
  {
    id: "service_1",
    title: "Hire a Service Pro",
    description: "Find trusted professionals for repairs, installations and home services.",
    icon: Wrench,
    image: "https://res.cloudinary.com/dmtfdnuap/image/upload/v1768683911/6aebfc26-97b2-40a8-88af-0265b215f450.png",
    href: "/services/hire",
    accent: "blue",
  },
  {
    id: "service_2",
    title: "Send Packages",
    description: "Send and track packages with fast and reliable delivery.",
    icon: Package,
    image: "https://res.cloudinary.com/dmtfdnuap/image/upload/v1768686062/1903a278-97eb-43d4-9c90-019773ff8002.png",
    href: "/services/delivery",
    accent: "green",
  },
  {
    id: "service_3",
    title: "Call to Order",
    description: "Prefer talking? Place your order quickly by calling our support team.",
    icon: PhoneCall,
    image: "https://res.cloudinary.com/dmtfdnuap/image/upload/v1768686559/abe0bd1e-bdc4-4e7a-a327-1052fa9286a9.png",
    href: "/call-to-order",
    accent: "orange",
  },
  {
    id: "service_4",
    title: "Subscriptions",
    description: "Subscribe to essentials and get them delivered automatically.",
    icon: Repeat,
    image: "https://res.cloudinary.com/dmtfdnuap/image/upload/v1768686691/ae69fd23-5644-431f-bf55-839bde11071c.png",
    href: "/subscriptions",
    accent: "purple",
  },
];
