'use client'

import { useForm } from "react-hook-form"
import { useRef } from 'react';
import { Toaster, toast } from 'sonner'
import Image from "next/image";
import departureURL from "../../public/departure.png";
import { tropicalOrange } from "@/fonts/fonts";
import { sendEmail } from "@/app/actions";

export default function FormContact() {
  const formRef = useRef(null);

  const { 
      register,
      formState: { errors },
      handleSubmit, 
    } = useForm()
  const onSubmit = async (data) => {
    const result = await sendEmail(data) 
    if (result) {
      toast.success('Informations Sent! Thankyou');
      formRef.current.reset();
    } else {
      toast.error('Something went wrong!');
    }
  }

  return (
    <div id="contacts-section" className="container-fluid my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-xl-10">
          <div className="card border-0 overflow-hidden">
            <div className="card-body p-0">
              <div className="row g-0 align-items-center justify-content-around">
                <div className="col-12 col-md-5 d-none d-sm-block mb-5">
                  <Image 
                    src={departureURL}
                    alt="departure icon"
                    width={400}
                    className="d-block mx-auto"
                    placeholder="blur"
                  />
                </div>
                <div className="col-12 col-md-6 p-3 p-md-5 mb-5">
                  <div className="text-center">
                    <div className={`h1 fw-light ${tropicalOrange.className}`}>LET us know</div>
                    <p className="mb-4 text-muted">
                      Take your time before booking to inquire about packages and availability; we look forward to seeing you here.
                    </p>
                  </div>  


                  <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                    <div className="form-floating mb-3">
                      <input 
                        className="form-control rounded-0" 
                        placeholder="Name" 
                        {...register("name", { required: true, maxLength: 20 })}
                        aria-invalid={errors.Name ? "true" : "false"}
                      />
                      {errors.Name?.type === "required" && (
                        <p role="alert" style={{ marginTop:"10px", color: "red" }}>Name is required</p>
                      )}
                      {errors.Name?.type === "maxLength" && (
                        <p role="alert" style={{ marginTop:"10px", color: "red" }}>Maximum 20 characters allowed</p>
                      )}
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input 
                        className="form-control rounded-0" 
                        placeholder="email address" 
                        {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
                        aria-invalid={errors.Email ? "true" : "false"}
                      />
                      {errors.Email?.type === "required" && (
                        <p role="alert" style={{ marginTop:"10px", color: "red" }}>Email is required</p>
                      )}
                      {errors.Email?.type === "pattern" && (
                        <p role="alert" style={{ marginTop:"10px", color: "red" }}>Email not valid</p>
                      )}
                      <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select 
                          className="form-select rounded-0" 
                          id="floatingSelect" 
                          aria-label="Floating label select example"
                          {...register("plans")}
                        >
                          <option value="Packages">Packages</option>
                          <option value="Reservation">Reservation</option>
                          <option value="Work with us">Work with us</option>
                          <option value="others">Other...</option>
                        </select>
                        <label htmlFor="plans">What would you like to know?</label>
                    </div>
                    <div className="form-floating mb-3">
                      <textarea 
                        className="form-control rounded-0" 
                        placeholder="Message" 
                        {...register("message")}
                        style={{ height: "100px" }}
                        >
                      </textarea>
                      <label htmlFor="message">Would you leave us a message...</label>
                    </div>
                    <div className="d-grid">
                        <button className="btn-book text-uppercase spacing" type="submit">Get in touch</button>
                    </div>
                  <Toaster richColors position="bottom-right" expand={true} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}