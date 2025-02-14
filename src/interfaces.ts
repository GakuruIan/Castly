export interface OptionsResponse {
  _id: string;
  option: string;
  image_url: string | null;
  position: number | null;
}
export interface Poll {
  _id: string;
  ip: string;
  title: string;
  description: string;
  poll_type: string;
  creator?:{
    _id:string,
    name:string
  }
  allow_multiple_votes: boolean;
  openDate: string; // Stored as ISO Date String
  closeDate: string; // Stored as ISO Date String
  useCaptcha: boolean;
  requirePartcipantName: boolean;
  isClosed: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  settings: {
    one_vote_per_ip: boolean;
    require_account: boolean;
  };
  options: OptionsResponse[];
}

export interface PollResponse {
  poll: Poll;
}

export type rankOptions = {
  option_id: string;
  rank_score: number;
  rank_position: number;
}[];

export type messageResponse = {
  message: string;
};