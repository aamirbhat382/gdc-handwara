const viewmycourse = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-md px-4 mx-auto mt-12"
    >
      <h1 className="py-3 text-indigo-700">Course Viewer Dashboard</h1>
      <div>
        <label for="username" className="block py-2 text-gray-500">
          Form Number
        </label>
        <div className="flex items-center text-gray-400 border rounded-md">
          <input
            type="text"
            placeholder="Enter Form Number"
            id=""
            className="w-full p-2.5 ml-2 bg-transparent outline-none border-0 focus:border-0 "
          />
        </div>
        <h1 className="text-center py-2">OR</h1>
        <label for="username" className="block py-2 text-gray-500">
          Board Registration Number
        </label>
        <div className="flex items-center text-gray-400 border rounded-md">
          <input
            type="text"
            placeholder="Enter Board Registration Number"
            id=""
            className="w-full p-2.5 ml-2 bg-transparent outline-none border-0 focus:border-0 "
          />
        </div>
        <button className="py-2 px-2 mt-3  text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">Download Reciept</button>
      </div>
    </form>
  );
};

export default viewmycourse;
