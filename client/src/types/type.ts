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
  