import "./Home.css";
import Image from "next/image";
import homeImage from "../../public/home.jpg";
import CustomImage from "../components/customImage/CustomImage";
export default async function Home() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines/sources?&apiKey=9fcfc604453f4a7695fb3e4b6e875c83"
  );

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <form className="p-8 rounded shadow-md w-96 opacity-60">
          <label className="block text-white text-sm font-semibold mb-2">
            Search
          </label>
          <input
            type="text"
            id="searchquery"
            name="searchquery"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-gray-800"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <CustomImage
        title="Landing-page"
        image={homeImage}
        altText={"home-screen-img"}
      />
    </div>
  );
}
