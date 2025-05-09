const NewsLetterBox : React.FC = () => {
    const onSubmitHandler = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className="text-center mb-5">
            <p className="text-2xl font-medium text-gray-800">Subscribe now and get 20% off</p>
            <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolorum.</p>
            <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-sm" onSubmit={onSubmitHandler}>
                <input type="email" name="email" placeholder="Enter your email" className="w-full sm:flex-1 outline-none" required/>
                <button type="submit" className="bg-black text-white text-xs px-10 py-4 cursor-pointer hover:bg-white hover:text-black border-l border-black rounded-tr-sm rounded-br-sm">Subscribe</button>
            </form>
        </div>
    );
}

export default NewsLetterBox;