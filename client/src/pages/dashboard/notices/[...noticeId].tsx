import axios from "@/api/axios";
import DashboardLayout from "@/layouts/dashboard-layout";
import { useQuery } from "@tanstack/react-query";
import type { ReactElement } from "react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/router";
import Link from "next/link";

const NoticeDetailsPage = () => {
  const router = useRouter();
  const { noticeId } = router.query;
  const { data: noticeDetails = {} } = useQuery({
    queryKey: ["noticeDetails"],
    queryFn: async () => {
      const { data } = await axios.get(`/notices/${noticeId[0]}`);
      return data.data;
    },
  });

  const {
    title,
    description,
    author,
    status,
    postedDate,
    expiryDate,
    tags,
    relatedLinks,
  } = noticeDetails;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600">Author: {author}</p>
      <p className="text-gray-600">Posted Date: {new Date(postedDate).toLocaleDateString()}</p>
      <p className="text-gray-600">Expiry Date: {new Date(expiryDate).toLocaleDateString()}</p>
      <p className="text-gray-600 mt-4">{description}</p>
      <h3 className="text-xl font-semibold mt-4">Tags:</h3>
      <ul className="list-disc pl-5">
        {tags?.map((tag, index) => (
          <li key={index} className="text-gray-600">{tag}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4">Related Links:</h3>
      <ul className="list-disc pl-5">
        {relatedLinks?.map((link) => (
          <li key={link._id} className="text-blue-600">
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <Separator />
    </div>
  );
};

NoticeDetailsPage.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default NoticeDetailsPage;
