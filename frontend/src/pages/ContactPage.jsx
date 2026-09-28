export default function ContactPage() {
    return (
        <div className="w-screen h-screen bg-sand flex">
            <div className="contactLeft flex-1 h-full flex flex-col gap-20 justify-center p-20">
                <div className="contactInfo font-montserrat bg-white rounded-xl">
                    <div className="text-2xl flex-1">Contact Information</div>
                </div>
                <div className="quote flex-1 flex justify-center align-center font-projectTitle text-2xl bg-white text-burgundy rounded-xl">
                    <div className="text-3xl text-center w-full">
                        Quote
                    </div>
                </div>
            </div>
            <div className="contactRight flex-1 h-full flex flex-col justify-center p-20 rounded-xl">
                <div className="title font-projectTitle text-md bg-white text-burgundy">
                    Contact Form Goes here
                </div>
                <input name="Name" required="true" type="text" className="br-2 text-md font-montserrat" placeholder="Type your full name"/>
                <input name="Email" required="true" type="email" className="br-2 text-md font-montserrat" placeholder="Type your  email"/>
                <input name="Message" required="true" type="text" className="br-2 text-md font-montserrat" placeholder="Type your message here"/>
            </div>
        </div>
    )
}
