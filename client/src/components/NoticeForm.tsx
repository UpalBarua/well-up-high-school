import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { NoticeFormData, RelatedLink } from '@/types/types';
import axios from '@/api/axios';
function CreateNoticeForm() {
  const initialRelatedLink: RelatedLink = { title: '', url: '' };

  const { handleSubmit, control, getValues, setValue, watch } =
    useForm<NoticeFormData>({
      defaultValues: {
        title: '',
        description: '',
        pdfLink: '',
        postedDate: '',
        expiryDate: '',
        author: '',
        tags: '',
        status: 'Draft',
        relatedLinks: [initialRelatedLink],
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'relatedLinks',
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: NoticeFormData) => {
    const tagsArray = data.tags.split(',').map((tag) => tag.trim());
    data.tags = tagsArray;

    if (data.description.length < 10) {
      toast.error('Description must be at least 10 characters long');
      return;
    }
    console.log(data.relatedLinks);
    setIsLoading(true);

    try {
      const response = await axios.post('/notices', data);
      toast.success('Notice created successfully');
    } catch (error) {
      toast.error('Failed to create notice');
      console.error('Error creating notice:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold">
          Title:
        </label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              {...field}
              className="w-full p-2 border rounded-md"
            />
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 font-bold">
          Description:
        </label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              className="w-full p-2 border rounded-md"></textarea>
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
          render={({ field }) => (
            <input
              type="url"
              {...field}
              className="w-full p-2 border rounded-md"
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
          render={({ field }) => (
            <input
              type="date"
              {...field}
              className="w-full p-2 border rounded-md"
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
          render={({ field }) => (
            <input
              type="date"
              {...field}
              className="w-full p-2 border rounded-md"
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
          render={({ field }) => (
            <input
              type="text"
              {...field}
              className="w-full p-2 border rounded-md"
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
          render={({ field }) => (
            <input
              type="text"
              {...field}
              className="w-full p-2 border rounded-md"
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
          render={({ field }) => (
            <select {...field} className="w-full p-2 border rounded-md">
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
              <option value="Archived">Archived</option>
            </select>
          )}
        />
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className="mb-4">
          <label
            htmlFor={`relatedLinks[${index}].title`}
            className="block text-gray-700 font-bold">
            Related Link Title:
          </label>
          <Controller
            name={`relatedLinks[${index}].title`}
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                className="w-full p-2 border rounded-md"
              />
            )}
          />
          <label
            htmlFor={`relatedLinks[${index}].url`}
            className="block text-gray-700 font-bold">
            Related Link URL:
          </label>
          <Controller
            name={`relatedLinks[${index}].url`}
            control={control}
            render={({ field }) => (
              <input
                type="url"
                {...field}
                className="w-full p-2 border rounded-md"
              />
            )}
          />
          {index > 0 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="mt-2 bg-red-500 text-white px-2 py-1 rounded-md">
              Remove Related Link
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={() => append(initialRelatedLink)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Add Related Link
      </button>

      <div className="flex justify-center">
        <button
          type="submit"
          className={`px-4 font-semibold py-2 bg-gray-800 text-white rounded-lg mb-4${
            isLoading ? ' disabled' : ''
          }`}
          disabled={isLoading}>
          {isLoading ? <FaSpinner className="animate-spin" /> : 'Create Notice'}
        </button>
        <Toaster />
      </div>
    </form>
  );
}

export default CreateNoticeForm;
