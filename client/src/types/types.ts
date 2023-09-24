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
  gender: "male" | "female" | "other";
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

export type StudentData = {
  _id: string;
  firstName: string;
  lastName: string;
  studentId: number;
  bloodGroup: string;
  email: string;
  birthdate: string;
  gender: string;
  address: string;
  phone: string;
  classInfo: {
    session: any;
    group: string;
    class: string;
    section: string;
  };
  registrationDate: string;
  status: string;
};
