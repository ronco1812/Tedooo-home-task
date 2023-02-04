export interface feedItem {
  id: string;
  userId: string;
  avatar: string;
  comments: number;
  date: Date;
  didLike: boolean;
  images: string[];
  likes: number;
  premium: boolean;
  shopId: string;
  shopName: string;
  text: string;
  username: string;
}
