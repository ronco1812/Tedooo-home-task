export interface feedItem {
  id: string;
  userId: string;
  avatar: string;
  comments: number;
  date: string | Date;
  didLike: boolean;
  images: string | string[];
  likes: number;
  premium: boolean;
  shopId: string;
  shopName: string;
  text: string;
  username: string;
}
