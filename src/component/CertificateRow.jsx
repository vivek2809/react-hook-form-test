import React, { useState } from "react";
import { useForm } from "react-hook-form";

function CertificateRow({certificates}) {

    const {register} = useForm();
    
  return (
    <div className="row p-3">
      <div className="col-md-3">
        <label htmlFor="certificateName" className="form-label ps-1">
          Certificate Code
        </label>
        <select
          className="form-select"
          aria-label="certificateName"
          id="certificateName"
          {...register('certificateName')}
        >
          <option defaultValue="selected">Select Code</option>
          {
            certificates.map((item ,index)=>{
                return (
                    <option value={item.certificateName} key={Math.random()}>{item.certificateCode}</option>
                )
            })
          }
        </select>
      </div>
      <div className="col-md-3">
        <label htmlFor="passingYear" className="form-label ps-1">
          Passing Year
        </label>
        <input
          type="text"
          className="form-control"
          id="passingYear"
          placeholder="Passing year"
          {...register('passingYear')}
          
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="grade" className="form-label ps-1">
          Grade
        </label>
        <input
          type="text"
          className="form-control"
          id="grade"
          placeholder="Grade"
          {...register('grade')}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="Credentials" className="form-label ps-1">
          Credentials
        </label>
        <input
          type="text"
          className="form-control"
          id="Credentials"
          placeholder="Credentials"
          {...register('credentials')}
        />
      </div>
    </div>
  );
}

export default CertificateRow;
