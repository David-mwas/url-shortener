import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center  p-8">
      <h1 className="uppercase font-bold text-xl w-full text-center">
        Url shrinker
      </h1>
      <form className="mt-20 w-full flex items-center justify-center gap-4 " action="/shortUrls" method="POST">
        <label form="formurl" className="font-bold text-sm sr-only" >
          Url
        </label>
        <input
          type="url"
          name="formurl"
          id="formurl"
          className="flex-1 md:max-w-[40%] border border-black rounded-sm py-2 px-2"
        />
        <button
          type="submit"
          className="rounded-sm py-2 px-4 bg-slate-700 text-white hover:bg-slate-500"
        >
          Shrink
        </button>
      </form>
      <table className="w-full shadow shadow-slate-400 flex flex-col gap-1 mt-5  md:max-w-[50%]">
        <thead className="flex justify-between items-center bg-slate-400 px-4 py-4">
          <th>Full url</th>
          <th>short url</th>
          <th>count</th>
        </thead>
        <tbody className="px-4 py-4">
          <tr className="flex justify-between items-center">
            <td className="">
              <a href="https://david-mwas.vercel.app" target="_blank">
                <p className="truncate w-[150px]">
                  {" "}
                  https://david-mwas.vercel.app
                </p>
              </a>
            </td>
            <td className="">
              <a href="/yt7u7" target="_blank">
                <p className="truncate w-[150px]"> /yt7u7</p>
              </a>
            </td>
            <td className="">10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
