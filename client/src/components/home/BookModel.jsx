import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed flex justify-center items-center bg-black bg-opacity-60 top-0 bottom-0 left-0 right-0 z-50"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h1 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h1>
        <h1 className="my-2 text-gray-500">{book._id}</h1>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h1 className="my-1">{book.title}</h1>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h1 className="my-1">{book.author}</h1>
        </div>
        <p className="mt-2">Anything you want to show</p>
        <p className="my-2">
          Discover the intriguing world of law enforcement with Khaki Files:
          Inside Stories of Police Missions by Neeraj Kumar. In this captivating
          book, Neeraj Kumar, an experienced police officer, offers a unique
          insight into the exciting and challenging world of police missions. In
          this article, we will explore the fascinating content of “Khaki Files”
          and provide you with the opportunity to download the PDF version of
          the book for free. Prepare to be immersed in gripping stories of
          bravery, investigation, and the relentless pursuit of justice.
        </p>
      </div>
    </div>
  );
};

export default BookModel;
