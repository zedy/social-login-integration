export type Profile = {
  firstname: string;
  lastname: string;
  profilePicture: string;
  address: string;
  company: string;
  bio: string;
  id: number;
  phoneNumber: number;
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
