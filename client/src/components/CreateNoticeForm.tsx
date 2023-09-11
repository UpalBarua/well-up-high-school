import axios from "@/api/axios";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaSpinner } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

interface RelatedLink {
  title: string;
  url: string;
}

interface NoticeFormData {
  title: string;
  description: string;
  pdfLink: string;
  postedDate: string;
  expiryDate: string;
  author: string;
  tags: string[];
  status: string;
  relatedLinks: RelatedLink[];
}

function CreateNoticeForm() {
  const initialRelatedLink: RelatedLink = { title: "", url: "" };

  const [formData, setFormData] = useState<NoticeFormData>({
    title: "",
    description: "",
    pdfLink: "",
    postedDate: "",
    expiryDate: "",
    author: "",
    tags: [],
    status: "Draft",
    relatedLinks: [initialRelatedLink],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, status: e.target.value });
  };

  const handleTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(",");
    setFormData({ ...formData, tags });
  };

  const handleRelatedLinkChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedLinks = [...formData.relatedLinks];
    updatedLinks[index] = { ...updatedLinks[index], [name]: value };
    setFormData({ ...formData, relatedLinks: updatedLinks });
  };

  const handleAddRelatedLink = () => {
    setFormData({
      ...formData,
      relatedLinks: [...formData.relatedLinks, initialRelatedLink],
    });
  };

  const handleRemoveRelatedLink = (index: number) => {
    const updatedLinks = [...formData.relatedLinks];
    updatedLinks.splice(index, 1);
    setFormData({ ...formData, relatedLinks: updatedLinks });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post("/notices", formData);
      toast.success("Notice created successfully");
    } catch (error) {
      toast.error("Failed to create notice");

      console.error("Error creating notice:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold">
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold">
          Description:
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          className="w-full p-2 border rounded-md"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="pdfLink" className="block text-gray-700 font-bold">
          PDF Link:
        </label>
        <input
          type="url"
          name="pdfLink"
          value={formData.pdfLink}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="postedDate" className="block text-gray-700 font-bold">
          Posted Date:
        </label>
        <input
          type="date"
          name="postedDate"
          value={formData.postedDate}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="expiryDate" className="block text-gray-700 font-bold">
          Expiry Date:
        </label>
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold">
          Author:
        </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tags" className="block text-gray-700 font-bold">
          Tags (comma-separated):
        </label>
        <input
          type="text"
          name="tags"
          value={formData.tags.join(", ")}
          onChange={handleTagChange}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700 font-bold">
          Status:
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleStatusChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
          <option value="Archived">Archived</option>
        </select>
      </div>

      {formData.relatedLinks.map((link, index) => (
        <div key={index} className="mb-4">
          <label
            htmlFor={`relatedLinkTitle${index}`}
            className="block text-gray-700 font-bold"
          >
            Related Link Title:
          </label>
          <input
            type="text"
            name="title"
            value={link.title}
            onChange={(e) => handleRelatedLinkChange(e, index)}
            className="w-full p-2 border rounded-md"
          />
          <label
            htmlFor={`relatedLinkUrl${index}`}
            className="block text-gray-700 font-bold"
          >
            Related Link URL:
          </label>
          <input
            type="url"
            name="url"
            value={link.url}
            onChange={(e) => handleRelatedLinkChange(e, index)}
            className="w-full p-2 border rounded-md"
          />
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveRelatedLink(index)}
              className="mt-2 bg-red-500 text-white px-2 py-1 rounded-md"
            >
              Remove Related Link
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddRelatedLink}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Related Link
      </button>

      <div className="flex justify-center">
        <button
          type="submit"
          className={`px-4 font-semibold py-2 bg-gray-800 text-white rounded-lg mb-4${
            isLoading ? " disabled" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? <FaSpinner className="animate-spin" /> : "Create Notice"}
        </button>
        <Toaster />
      </div>
    </form>
  );
}

export default CreateNoticeForm;
