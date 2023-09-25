import DashboardLayout from "@/layouts/dashboard-layout";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "@/api/axios";
import { NoticeFormData } from "@/types/types";

const NoticeUpdatePage = () => {
  const router = useRouter();
  const { noticeId } = router.query;
  const id = noticeId[0];
  const { handleSubmit, control, setValue } = useForm<NoticeFormData>();

  // State to store the initial notice data
  const [initialNoticeData, setInitialNoticeData] = useState<NoticeFormData>({
    title: "",
    description: "",
    pdfLink: "",
    postedDate: "",
    expiryDate: "",
    author: "",
    tags: [],
    status: "",
    relatedLinks: [],
  });

  // Fetch initial notice data based on the noticeId
  useEffect(() => {
    if (noticeId) {
      // Replace with your logic to fetch notice data based on noticeId
      axios.get(`/notices/${id}`).then((response) => {
        const noticeData: NoticeFormData = response.data.data;

        // Populate the form fields with the fetched notice data
        setValue("title", noticeData.title);
        setValue("description", noticeData.description);
        setValue("pdfLink", noticeData.pdfLink);
        setValue("postedDate", noticeData.postedDate);
        setValue("expiryDate", noticeData.expiryDate);
        setValue("author", noticeData.author);
        setValue("tags", noticeData.tags); // Tags is already an array
        setValue("status", noticeData.status);
        setValue("relatedLinks", noticeData.relatedLinks);

        // Update the initialNoticeData state
        setInitialNoticeData(noticeData);
      });
    }
  }, [noticeId, id, setValue]);

  // Create a function to handle the form submission
  const onSubmit = async (formData: NoticeFormData) => {
    try {
      console.log(formData)
      await axios.put(`/notices/${id}`, formData);

      // Handle success or show a success message
      console.log("Notice updated successfully!");
    } catch (error) {
      // Handle error or show an error message
      console.error("Error updating notice:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Update Notice</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold">
            Title:
          </label>
          <Controller
            name="title"
            control={control}
            defaultValue={initialNoticeData.title}
            render={({ field }) => (
              <input
                {...field}
                className="w-full p-2 border rounded-md"
                placeholder="Title"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold"
          >
            Description:
          </label>
          <Controller
            name="description"
            control={control}
            defaultValue={initialNoticeData.description}
            render={({ field }) => (
              <textarea
                {...field}
                className="w-full p-2 border rounded-md"
                placeholder="Description"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pdfLink" className="block text-gray-700 font-bold">
            PDF Link:
          </label>
          <Controller
            name="pdfLink"
            control={control}
            defaultValue={initialNoticeData.pdfLink}
            render={({ field }) => (
              <input
                {...field}
                className="w-full p-2 border rounded-md"
                placeholder="PDF Link"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postedDate" className="block text-gray-700 font-bold">
            Posted Date:
          </label>
          <Controller
            name="postedDate"
            control={control}
            defaultValue={initialNoticeData.postedDate}
            render={({ field }) => (
              <input
                {...field}
                type="date"
                className="w-full p-2 border rounded-md"
                placeholder="Posted Date"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="expiryDate" className="block text-gray-700 font-bold">
            Expiry Date:
          </label>
          <Controller
            name="expiryDate"
            control={control}
            defaultValue={initialNoticeData.expiryDate}
            render={({ field }) => (
              <input
                {...field}
                type="date"
                className="w-full p-2 border rounded-md"
                placeholder="Expiry Date"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-bold">
            Author:
          </label>
          <Controller
            name="author"
            control={control}
            defaultValue={initialNoticeData.author}
            render={({ field }) => (
              <input
                {...field}
                className="w-full p-2 border rounded-md"
                placeholder="Author"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-gray-700 font-bold">
            Tags (comma-separated):
          </label>
          <Controller
            name="tags"
            control={control}
            defaultValue={initialNoticeData.tags}
            render={({ field }) => (
              <input
                {...field}
                className="w-full p-2 border rounded-md"
                placeholder="Tags (comma-separated)"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 font-bold">
            Status:
          </label>
          <Controller
            name="status"
            control={control}
            defaultValue={initialNoticeData.status}
            render={({ field }) => (
              <select
                {...field}
                className="w-full p-2 border rounded-md"
                placeholder="Status"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Archived">Archived</option>
              </select>
            )}
          />
        </div>

        {initialNoticeData.relatedLinks.map((link, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={`relatedLinks[${index}].title`}
              className="block text-gray-700 font-bold"
            >
              Related Link Title:
            </label>
            <Controller
              name={`relatedLinks[${index}].title`}
              control={control}
              defaultValue={link.title}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full p-2 border rounded-md"
                  placeholder="Related Link Title"
                />
              )}
            />
            <label
              htmlFor={`relatedLinks[${index}].url`}
              className="block text-gray-700 font-bold"
            >
              Related Link URL:
            </label>
            <Controller
              name={`relatedLinks[${index}].url`}
              control={control}
              defaultValue={link.url}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full p-2 border rounded-md"
                  placeholder="Related Link URL"
                />
              )}
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Update Notice
        </button>
      </form>
    </div>
  );
};

NoticeUpdatePage.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default NoticeUpdatePage;
