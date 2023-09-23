export type RelatedLink = {
  title: string;
  url: string;
};

export type NoticeFormData = {
  title: string;
  description: string;
  pdfLink: string;
  postedDate: string;
  expiryDate: string;
  author: string;
  tags: string;
  status: string;
  relatedLinks: RelatedLink[];
};

export type Teacher = {
  _id: string;
  name: string;
  imageURL: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  phone: string;
  subjects: string[];
  classes: string[];
  experience: number;
  role: string;
  degrees: {
    degreeName: string;
    university: string;
    year: string;
  }[];
};
