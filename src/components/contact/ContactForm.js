import React, { useState } from 'react';
//import { useForm } from '@formspree/react';
//import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';

function ContactForm({ gridWidth }) {
    // const [state, handleSubmit] = useForm('xnqwjgvp');
    // console.log("state", state);
    const [Spinner, setSpinner] = useState(false)

    const onFinish = async (values) => {
        try {
            setSpinner(true)
            let res = await axios.post("https://sanjhavehra.womenempowerment.online/Contact_Email_send", {
                Name: values.username,
                subject: values.subject,
                email: values.email,
                msg: values.message
            })
            console.log("Res",res.data.success );
            if (res.data.success == true) {

                setSpinner(false)
                toast.success("Email send Successfully🎉")

            }

            setSpinner(false)

        } catch (e) {
            console.log(e);
            setSpinner(false)

        }

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // useEffect(() => {
    //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //     var forms = document.querySelectorAll('.needs-validation');

    //     // Loop over them and prevent submission
    //     Array.prototype.slice.call(forms).forEach(function (form) {

    //         console.log("form", form);
    //         form.addEventListener(
    //             'submit',
    //             function (event) {
    //                 if (!form.checkValidity()) {
    //                     event.preventDefault();
    //                     event.stopPropagation();
    //                 }

    //                 form.classList.add('was-validated');
    //             },
    //             true
    //         );
    //     });
    // }, []);
    // if (state.succeeded) {
    //     return (
    //         <div className={`${gridWidth} text-center`}>
    //             <p className='mb-0 fw-bold mt-5 mb-0'>
    //                 <i
    //                     className='las la-grin-beam'
    //                     style={{ fontSize: '10rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
    //                 ></i>
    //             </p>

    //             <h1 className='h2'>Thanks for contacting us.</h1>
    //             <p className='text-muted'>We'll reply back as soon as possible.</p>
    //             <Link to='/' className='btn btn-gradient-primary'>
    //                 Return Home
    //             </Link>
    //         </div>
    //     );
    // }

    return (
        <div className={gridWidth}>
            <div className='card bg-transparent' style={{ height: "100%", background: "#070630", border: "1px solid #131DFF", boxShadow: "0 0 10px 5px #2c1cb5aa", borderRadius: "8px" }}>
                <div className='card-body p-lg-5' style={{ borderRadius: "8px" }}>
                    {/* <div className='d-flex align-items-center mb-4'>
                        <div className='icon icon-md me-2 flex-shrink-0 bg-primary rounded-sm text-white'>
                            <i className='las la-pen-alt'></i>
                        </div>
                        <h2 className='h5 mb-0'>Drop us your query</h2>
                    </div> */}
                    <div className='d-flex align-items-center mb-4'>
                        <div className='d-block'>
                            <i className='las la-pen-alt' style={{ background: "linear-gradient(0deg, #131DFF, #131dffa6)", filter: "drop-shadow(0px 0px 15px #131DFF)", borderRadius: "5px", padding: "5px 10px" }}></i>
                            <label className='form-label text-white fs-5 fw-bold ms-2 mb-0'>Drop us your query</label>
                        </div>
                    </div>

                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className='contact-form needs-validation' >
                        <div className='row gy-3'>
                            <div className='col-lg-6'>
                                <label className='form-label text-white ms-2' htmlFor='fullname'>
                                    Full name
                                </label>


                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your full name',
                                        },
                                    ]}
                                >
                                    <div className='input-icon' style={{ background: "#030B3C" }}>

                                        <div className='input-icon-text'>
                                            <i className='text-white las la-user'></i>
                                        </div>
                                        <Input className='form-control shadow-0 bg-transparent ps-5' placeholder='Enter your full name' id='fullname' style={{ border: "1px solid #49E6FB", borderRadius: "8px" }} />
                                    </div>
                                </Form.Item>
                                {/* <input
                                        className='form-control shadow-0 bg-transparent'
                                        type='text'
                                        autoComplete='off'
                                        name='fullname'
                                        id='fullname'
                                        required={true}
                                        placeholder='Enter your full name'
                                    /> */}
                                <div className='invalid-feedback bg-danger rounded-sm text-white px-3 py-1'>
                                    Please enter your full name
                                </div>

                            </div>
                            <div className='col-lg-6'>
                                <label className='form-label text-white ms-2' htmlFor='email'>
                                    Email address
                                </label>

                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your emaill address',
                                        },
                                    ]}
                                >
                                    <div className='input-icon' style={{ background: "#030B3C" }}>

                                        <div className='input-icon-text'>
                                            <i className='text-white las la-envelope'></i>
                                        </div>
                                        <Input className='form-control shadow-0 bg-transparent ps-5' placeholder='Enter your email address' id='emailaddress' style={{ border: "1px solid #49E6FB", borderRadius: "8px" }} />
                                    </div>
                                </Form.Item>

                                {/* <div className='input-icon'>
                                    <div className='input-icon-text'>
                                        <i className='text-primary las la-envelope'></i>
                                    </div>
                                    <input
                                        className='form-control shadow-0 bg-transparent'
                                        type='email'
                                        autoComplete='off'
                                        name='email'
                                        id='email'
                                        required={true}
                                        placeholder='Enter your email address'
                                    />
                                    <div className='invalid-feedback bg-danger rounded-sm text-white px-3 py-1'>
                                        Please enter your emaill address
                                    </div>
                                </div> */}
                            </div>
                            <div className='col-lg-12'>
                                <label className='form-label text-white ms-2' htmlFor='subject'>
                                    Subject
                                </label>
                                <Form.Item
                                    name="subject"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please Enter your subject',
                                        },
                                    ]}
                                >
                                    <div className='input-icon' style={{ background: "#030B3C" }}>

                                        <div className='input-icon-text'>
                                            <i className='text-white las la-file-alt'></i>
                                        </div>
                                        <Input className='form-control shadow-0 bg-transparent ps-5' placeholder='Enter your subject' id='subject' style={{ border: "1px solid #49E6FB", borderRadius: "8px" }} />
                                    </div>
                                </Form.Item>
                                {/* <div className='input-icon'>
                                    <div className='input-icon-text'>
                                        <i className='text-primary las la-file-alt'></i>
                                    </div>
                                    <input
                                        className='form-control shadow-0 bg-transparent'
                                        type='text'
                                        autoComplete='off'
                                        name='subject'
                                        id='subject'
                                        placeholder='Enter your subject'
                                    />
                                </div> */}
                            </div>

                            <div className='col-lg-12'>
                                <label className='form-label text-white ms-2' htmlFor='message'>
                                    Message
                                </label>
                                <Form.Item
                                    name="message"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your message',
                                        },
                                    ]}
                                >
                                    <div className='input-icon' style={{ background: "#030B3C" }}>

                                        {/* <div className='input-icon-text'>
                                            <i className='text-primary las la-file-alt'></i>
                                        </div> */}
                                        <Input.TextArea className='form-control shadow-0 bg-transparent' placeholder='How can we help you' id='message' style={{ minHeight: "140px", borderRadius: "8px", border: "1px solid #49E6FB" }} />
                                    </div>
                                </Form.Item>
                                {/* <textarea
                                    className='form-control shadow-0 bg-transparent'
                                    rows='4'
                                    name='message'
                                    id='message'
                                    placeholder='How can we help you'
                                    required={true}
                                ></textarea>
                                <div className='invalid-feedback bg-danger rounded-sm text-white px-3 py-1'>
                                    Please enter your message
                                </div> */}
                            </div>

                            <div className='col-lg-12'>
                                <Button className='btn-buynow w-100 pb-2' type='submit' htmlType="submit" style={{ boxShadow: "0px 0px 10px 5px #4659CF77" }}>
                                    {/* <i className='las la-paper-plane me-2'></i> */}
                                    {
                                        Spinner ? "Loading..." : "Send your message"
                                    }

                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
