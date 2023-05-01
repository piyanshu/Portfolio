import Form from "../components/Form";

function ContactPage(){
    return (
        <div className="flex"> 
            <div className=" w-5/12 pt-24">
                <p className="text-4xl font-bold text-center">Send Message</p>
                <Form width="w-4/6" string1="Your Email" string2="Your Message" btnText="Send Message"/>
            </div>
            <div className="border w-7/12">
                <p>dsjfshjfjf</p>
            </div>
        </div>
    );
};
export default ContactPage;