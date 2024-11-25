export interface IUser {
  avatar: IAvatar;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  include_adult: boolean;
  username: string;
}
export interface IGravatar {
    hash: string;
}

export interface ITmdb {
    avatar_path?:null;
}

export interface IAvatar {
    gravatar: IGravatar;
    tmdb: ITmdb;
}