export type Notice = {
  title: string;
  description: string;
  pdfLink: string;
  postedDate: string;
  expiryDate: string;
  author: string;
  tags: string;
  status: string;
  relatedLinks: {
    title: string;
    url: string;
  }[];
};
