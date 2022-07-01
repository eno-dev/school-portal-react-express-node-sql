import myPDF from '/Users/enosaliu/Downloads/StudentsT3.pdf'
const Index = () => {
    return (
        <div>
            <h1>
                Schedule
            </h1>
            <iframe
                src={myPDF}
                frameBorder="0"
                scrolling="auto"
                height="100%"
                width="100%"
            ></iframe>
        </div>
    )
}

export default Index