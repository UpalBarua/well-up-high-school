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
    fullName: string;
    email: string;
    gender: string;
    phone: string;
    subjects: string[];
    classesTaught: string[];
    yearsOfExperience: number;
    specializedRole: string;
    degrees: {
      degreeName: string;
      university: string;
      year: string;
    }[];
  };