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
  creator?: {
    _id: string;
    name: string;
  };
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
  redirect?: string;
};

export interface Results {
  _id: string;
  poll_id: string;
  title: string;
  poll_type: string;
  description: string;
  creator?: {
    _id: string;
    name: string;
  };
  createdAt: string;
  isClosed: boolean;
  total_votes: number;
  results?: Result[];
  ranking_results?: RankingResult[];
  winner: Winner;
}

export interface Result {
  option_id: string;
  option_name: string;
  votes: number;
}

export interface RankingResult {
  option_id: string;
  option_name: string;
  rank_score: number;
  ranking_position: number;
}

export interface Winner {
  option_id: string;
  option_name: string;
  votes: number;
}

export interface ResultsProps {
  results: Results;
}
