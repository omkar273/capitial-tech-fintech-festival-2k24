import CompanyDetailsPageNavbar from "@/features/company_analysis/components/company_page_navbar";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

const chartbox = () => {
    const step = [
        {
            id: 'Greet',
            message: 'Hello, Welcome to our website',
            trigger: 'Ask Name'
        },
        {
            id: 'Ask Name',
            message: 'Please enter your name',
            trigger: 'waiting1',
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name',
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}, Please select your issue',
            trigger: 'issues',
        },
        {
            id: "issues",
            options: [
                { value: "Contact1", label: "React", trigger: "Contact" },
                { value: "Mail1", label: "Angular", trigger: "Mail" }, // Unique value for Angular
            ],
        },
        {
            id: 'Contact',
            message: 'Thanks {previousValue} for telling your issue',
            end: true,
        },
        {
            id: 'Mail',
            message: 'Thanks {previousValue} for telling your issue',
            end: true,
        },
    ];

    return (
        <div className="pg">
            <CompanyDetailsPageNavbar />
            <div className="p-8">
                <Segment floated="right">
                    <ChatBot steps={step} />
                </Segment>
            </div>
        </div>
    );
};

export default chartbox;
