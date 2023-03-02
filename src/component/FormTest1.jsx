import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const FormTest1 = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "Certificates",
    control,
  });

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  // for get certificate data from API
  const [certificates, setCertificates] = useState([]);

  const CertificateApiData = async () => {
    const response = await fetch(
      "https://mocki.io/v1/ab962869-cb30-4dd3-9082-a1aca55e9111"
    );

    const certificateObj = await response.json();
    setCertificates(certificateObj);
  };

  const showCertificateRow = () => {
    append({
      certificateName: "",
      passingYear: "",
      grade: "",
      credentials: "",
    });
  };

  useEffect(() => {
    CertificateApiData();
    showCertificateRow();
  }, []);

  return (
    <>
      <section
        className="d-flex"
        style={{ backgroundColor: "#eee", minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-5">
                  <div className="row justify-content-center">
                    <h3 className="text-secondary pb-4">
                      Student Registration Form
                    </h3>
                    <hr />
                    <form
                      action="#"
                      className="row g-4 text-start"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      {/* studentname */}
                      <div className="col-md-6">
                        <label
                          htmlFor="studentName"
                          className="form-label ps-1"
                        >
                          Student Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="studentName"
                          placeholder="studentName"
                          {...register("studentName", { required: true })}
                        />
                        {errors.studentName && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>

                      {/* college name */}
                      <div className="col-md-6">
                        <label
                          htmlFor="collegeName"
                          className="form-label ps-1"
                        >
                          College Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="collegeName"
                          placeholder="collegeName"
                          {...register("collegeName", { required: true })}
                        />
                        {errors.collegeName && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>

                      {/* enrollment no */}
                      <div className="col-md-6">
                        <label
                          htmlFor="enrollmentNo"
                          className="form-label ps-1"
                        >
                          Enrollment No
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="enrollmentNo"
                          placeholder="enrollmentNo"
                          {...register("enrollmentNo", { required: true })}
                        />
                        {errors.enrollmentNo && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>

                      {/* gender */}
                      <div className="col-md-6">
                        <label htmlFor="gender" className="form-label ps-1">
                          Gender
                        </label>
                        <div className="d-flex">
                          <div className="form-check me-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="male"
                              value="male"
                              {...register("gender", { required: true })}
                            />
                            <label className="form-check-label" htmlFor="male">
                              Male
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="female"
                              value="female"
                              {...register("gender", { required: true })}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                        {errors.gender && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>

                      {/* certificate  */}

                      <div className="col-md-12">
                        <div className="mt-2 d-flex justify-content-between mb-3">
                          <label
                            htmlFor="certificate"
                            className="form-label ps-1"
                          >
                            Certificates
                          </label>
                        </div>
                        <div className="bg-light p-3 rounded">
                          {/* for certificate add functionality */}

                          {fields.map((item, index) => {
                            return (
                              <div className="row mb-3 " key={item.id}>
                                <div className="col-md-3">
                                  <label
                                    htmlFor="certificateName"
                                    className="form-label ps-1"
                                  >
                                    Certificate Code
                                  </label>
                                  <select
                                    className="form-select"
                                    aria-label="certificateName"
                                    id="certificateName"
                                    {...register(
                                      `Certificates.${index}.certificateName`,
                                      { required: true }
                                    )}
                                  >
                                    <option defaultValue="Select code" />
                                    {certificates.map((item, index) => {
                                      return (
                                        <option
                                          value={item.certificateName}
                                          key={index}
                                        >
                                          {item.certificateCode}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  {/* {errors.certificateName && <span>This field is required</span>} */}
                                </div>
                                <div className="col-md-3">
                                  <label
                                    htmlFor="passingYear"
                                    className="form-label ps-1"
                                  >
                                    Passing Year
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="passingYear"
                                    placeholder="Passing year"
                                    {...register(
                                      `Certificates.${index}.passingYear`,
                                      { required: true }
                                    )}
                                  />
                                  {errors.passingYear && (
                                    <span>This field is required</span>
                                  )}
                                </div>
                                <div className="col-md-3">
                                  <label
                                    htmlFor="grade"
                                    className="form-label ps-1"
                                  >
                                    Grade
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="grade"
                                    placeholder="Grade"
                                    {...register(
                                      `Certificates.${index}.grade`,
                                      { required: true }
                                    )}
                                  />
                                  {errors.grade && (
                                    <span>This field is required</span>
                                  )}
                                </div>
                                <div className="col-md-2">
                                  <label
                                    htmlFor="Credentials"
                                    className="form-label ps-1"
                                  >
                                    Credentials
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control me-2"
                                    id="Credentials"
                                    placeholder="Credentials"
                                    {...register(
                                      `Certificates.${index}.credentials`,
                                      { required: true }
                                    )}
                                  />
                                  {errors.credentials && (
                                    <span>This field is required</span>
                                  )}
                                </div>
                                <div className="col d-flex align-items-end">
                                  {index > 0 ? (
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => remove(index)}
                                    >
                                      <i className="bi bi-trash"></i>
                                    </button>
                                  ) : (
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      onClick={showCertificateRow}
                                    >
                                      <i className="bi bi-plus-lg"></i>
                                    </button>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* submit button */}

                      <div className="col-md-12 text-center mt-5">
                        <button
                          type="submit"
                          className="btn btn-secondary px-5"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormTest1;
