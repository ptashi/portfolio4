export default function ContactPage() {
    const info = [
        {label:"✉ Email", value:"pemalotus276@gmail.com"},
        {label:"🎓 Expected Grad. Date", value:"May 2028"},
        {label:"⌖ Based in", value:"Montville, CT"},
        {label:"🎓 University", value:"University of Connecticut"},
    ]


    return (
        <div className="w-screen h-screen bg-sand flex mt-5">
            <div className="contactLeft flex-1 h-full flex flex-col gap-10 justify-center p-20 ">
                <div className="contactInfo font-montserrat h-auto bg-white rounded-xl">
                    <div className="text-2xl flex-1 pt-10 text-center text-burgundy">Contact Information</div>
                    <div className="flex flex-col justify-items items-start px-20">
                        {info.map((item) => (
                            <div className="flex flex-col items-start border-b-1 font-light text-dustpink w-full gap-1 py-2">
                                <div className="text-l">{item.label}</div>
                                <div className="text-l pb-3 text-burgundy">{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="quote flex-1 flex flex-col justify-center items-center text-2xl bg-white text-burgundy rounded-xl">
                    <div className="text-2xl text-center w-full mb-10">
                        A Quote from H.H. The Dalai Lama 
                    </div>
                    <div className="quoteText font-light italic px-20">
                        "Happiness is not something ready-made. It comes from your own actions."
                    </div>
                </div>
            </div>
            <div className="contactRight flex-1 flex flex-col justify-start mx-30 my-20 p-10 rounded-xl bg-white text-burgundy">
                <div className="title font-projectTitle text-5xl py-10">
                    Contact Me
                </div>
                <div className="flex flex-col justify-start items-start gap-1 w-full mb-5">
                    <div className="text-burgundy font-light text-xl">Full Name</div>
                    <input name="Name" required="true" type="text" className="br-2 cursor-pointer bg-sand/20  text-md w-full font-montserrat rounded-xl p-2 mb-3" placeholder="e.g. Jane Doe"/>
                </div>
                <div className="flex flex-col justify-start items-start gap-1 w-full mb-5">
                    <div className="text-burgundy font-light text-xl">Email</div>
                    <input name="Email" required="true" type="email" className="br-2 cursor-pointer bg-sand/20  text-md w-full font-montserrat rounded-xl p-2 mb-3" placeholder="e.g. janedoe@gmail.com"/>
                </div>
                <div className="flex flex-col justify-start items-start gap-1 w-full mb-5">
                    <div className="text-burgundy font-light text-xl">Message</div>
                    <textarea  name="Message" required="true" type="text" rows="6" className="br-2 cursor-pointer bg-sand/20 text-md w-full font-montserrat h-50 rounded-xl p-2 mb-3" placeholder="e.g. Can we have a coffee chat?"/>
                </div>
                <button onSubmit={() => handleFormSubmit()} className="my-5 rounded-xl bg-burgundy text-white text-xl font-light h-10 w-full items-center cursor-pointer hover:bg-dustpink transform duration-200">Submit</button>
            </div>
        </div>
    )
}
