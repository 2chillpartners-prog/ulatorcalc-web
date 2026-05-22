export type FeedbackEntry = {
  id: string;
  createdAt: string;
  name?: string;
  trade: string;
  frustration: string;
  mustHave: string;
  email?: string;
};

export type FeedbackInput = {
  name?: string;
  trade: string;
  frustration: string;
  mustHave: string;
  email?: string;
};
