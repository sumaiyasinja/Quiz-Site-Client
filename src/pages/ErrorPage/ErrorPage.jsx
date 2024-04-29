import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-[90vh] flex justify-center gap-12 items-center flex-col">
            <p className="text-5xl">404 Page not found </p>
            <Link to ='/' className="text-blue cursor-pointer ">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;