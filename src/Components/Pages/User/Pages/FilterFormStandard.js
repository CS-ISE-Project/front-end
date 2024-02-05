import React from "react";
import { useFormik } from "formik";

const FilterForm = ({ onSubmit, Queryofsearch }) => {
  function removeEmptyStringsFromProperties(obj, properties) {
    properties.forEach((property) => {
      if (Array.isArray(obj[property])) {
        obj[property] = obj[property].filter((item) => item !== "");
      }
    });
  }
  const formik = useFormik({
    initialValues: {
      query: Queryofsearch,
      authors: [],
      institutes: [],
      keywords: [],
      startDate: "",
      endDate: "",
    },
    onSubmit: async (values) => {
      try {
        const authorArray =
          typeof values.authors === "string"
            ? values.authors.split(",").map((author) => author.trim())
            : [];

        const instituteArray =
          typeof values.institutes === "string"
            ? values.institutes.split(",").map((institute) => institute.trim())
            : [];

        const keywordArray =
          typeof values.keywords === "string"
            ? values.keywords.split(",").map((keyword) => keyword.trim())
            : [];

        const formData = {
          query: Queryofsearch,
          filter: {
            authors: authorArray,
            institutes: instituteArray,
            keywords: keywordArray,
            date_interval: [values.startDate, values.endDate],
          },
        };
        removeEmptyStringsFromProperties(formData.filter, [
          "authors",
          "institutes",
          "keywords",
        ]);
        let endpoint;
        if (typeof Queryofsearch === "string") {
          endpoint =
            "https://ise-project-api-production.up.railway.app/search/simple/filter";
        } else {
          endpoint =
            "https://ise-project-api-production.up.railway.app/search/advanced/filter";
        }
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(formData),
        });
        const responseData = await response.json();
        onSubmit(responseData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex gap-4">
      <label className="flex flex-col justify-start">
        Authors:
        <input
          type="text"
          name="authors"
          value={formik.values.authors}
          onChange={formik.handleChange}
          className="w-[100%] border-2 py-2 px-2 rounded-[8px] border-Purple100"
          placeholder="Author1,Author2,..."
        />
      </label>

      <label className="flex flex-col justify-start">
        Institutes:
        <input
          type="text"
          name="institutes"
          value={formik.values.institutes}
          onChange={formik.handleChange}
          className="w-[100%] border-2 py-2 px-2 rounded-[8px] border-Purple100"
          placeholder="Institute1,Institute2,..."
        />
      </label>

      <label className="flex flex-col justify-start">
        Keywords:
        <input
          type="text"
          name="keywords"
          value={formik.values.keywords}
          onChange={formik.handleChange}
          className="w-[100%] border-2 py-2 px-2 rounded-[8px] border-Purple100"
          placeholder="Keyword1,Keyword2,..."
        />
      </label>

      <label className="flex flex-col justify-start">
        Start Date:
        <input
          type="date"
          name="startDate"
          value={formik.values.startDate}
          onChange={formik.handleChange}
          className="w-[100%] border-2 py-2 px-2 rounded-[8px] border-Purple100"
          placeholder="Start Date"
        />
      </label>

      <label className="flex flex-col justify-start">
        End Date:
        <input
          type="date"
          name="endDate"
          value={formik.values.endDate}
          onChange={formik.handleChange}
          className="w-[100%] border-2 py-2 px-2 rounded-[8px] border-Purple100"
          placeholder="End Date"
        />
      </label>

      <button
        type="submit"
        className="bg-Spbtn text-white flex gap-6 items-center py-4 px-8  rounded-[8px] font-semibold text-[1.2rem]"
      >
        Apply Filter
      </button>
    </form>
  );
};

export default FilterForm;
