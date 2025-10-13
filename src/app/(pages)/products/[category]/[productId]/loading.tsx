import Spinner from "@/components/reusable/Spinner";

const loading = () => {
    return (
        <div className="flex justify-center items-center h-[90vh]">
            <Spinner isDark={false} className="size-20 border-4" />
        </div>
    );
};

export default loading;