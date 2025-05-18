export interface CardProps {
  imageUrl: string;           // URL for the preview image
  tags: string[];             // E.g., ["Top Villa", "Self CheckIn"]
  title: string;              // E.g., "Entire cabin"
  location: string;           // E.g., "Nova Friburgo, Brazil"
  rating: number;             // E.g., 4.76
  pricePerNight: number;      // E.g., 62
  bedCount: number;           // E.g., 1
  bathCount: number;          // E.g., 1
  guestCount: number;         // E.g., 3
}

export interface ButtonsProps{
  text: string;
  onClick: () => void;
}