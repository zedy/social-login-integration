export type Profile = {
  firstName: string;
  lastName: string;
  profilePicture: string;
  bio: string;
  userId: number;
  phone: number;
};

type User = {
  email: string;
  id: number;
  isSocial: boolean;
  provider: string;
  providerId: string;
  profile: Profile;
};

export default User;
