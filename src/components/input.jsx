import React from "react";
import style from "./style.module.css";
import { useForm } from "react-hook-form";

export const Input = () => {
    const {
        handleSubmit,
        reset,
        register,
        formState: { errors },
    } = useForm();
    const submit = (data) => {};
    return (
        <div className={style.main_block}>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.first}>
                        <h1 className={style.title}>
                            Learn to code by watching others
                        </h1>
                        <p className={style.text}>
                            See how experienced developers solve problems in
                            real-time. Watching scripted tutorials is great, but
                            understanding how developers think is invaluable.{" "}
                        </p>
                    </div>

                    <div className={style.inp_block}>
                        <div className={style.top_block}>
                            <p className={style.top_text}>
                                Try it free 7 days then $20/mo. thereafter
                            </p>
                        </div>

                        <div className={style.main_inp_block}>
                            <form onSubmit={handleSubmit(submit)} method="post">
                                <input
                                    {...register("name", {
                                        required: true,
                                        minLength: {
                                            value: 0,
                                            message:
                                                "First Name cannot be empty",
                                        },
                                    })}
                                    className={style.input}
                                    type="text"
                                    placeholder="Jonathan"
                                />
                                <p className={style.inp_er_text}>
                                    {errors.name &&
                                        "First Name cannot be empty"}
                                </p>
                                <input
                                    {...register("name", {
                                        required: true,
                                        minLength: {
                                            value: 0,
                                            message:
                                                "last Name cannot be empty",
                                        },
                                    })}
                                    className={style.input}
                                    type="text"
                                    placeholder="Last Name"
                                />
                                <p className={style.inp_er_text}>
                                    {errors.name && "Last Name cannot be empty"}
                                </p>
                                <input
                                    {...register("name", {
                                        required: true,
                                        minLength: {
                                            value: 0,
                                            message: "email cannot be empty",
                                        },
                                    })}
                                    className={style.input}
                                    type="email"
                                    placeholder="Email Address"
                                />
                                <p className={style.inp_er_text}>
                                    {errors.name && "email cannot be empty"}
                                </p>
                                <input
                                    {...register("name", {
                                        required: true,
                                        minLength: {
                                            value: 0,
                                            message:
                                                "last Name cannot be empty",
                                        },
                                    })}
                                    className={style.input}
                                    type="password"
                                    placeholder="Password"
                                />
                                <p className={style.inp_er_text}>
                                    {errors.name && "password cannot be empty"}
                                </p>
                                <button className={style.btn}>
                                    CLAIM YOUR FREE TRIAL
                                </button>
                            </form>
                            <p className={style.inp_text}>
                                By clicking the button, you are agreeing to our
                                <span className={style.span}>
                                    Terms and Services
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
