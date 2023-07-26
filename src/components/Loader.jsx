
const Loader = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <div className='text-center'>
                {/* <progress className="progress w-56"></progress> */}

                <span className="loading loading-dots loading-lg"></span>
            </div>
        </div>
    );
};

export default Loader;