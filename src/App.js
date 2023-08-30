import './App.css';
import Post from './component/post.js'
import Form from './form/form';
function App() {
  const data = [
    {
      title: "Book 1",
      description: "This is Book No. 1",
      image: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"
    },
    {
      title: "Book 2",
      description: "This is Book No. 2",
      image: "https://static.vecteezy.com/system/resources/previews/009/399/398/non_2x/old-vintage-book-clipart-design-illustration-free-png.png"
    },
    {
      title: "Book 3",
      description: "This is Book No. 3",
      image: "https://static.vecteezy.com/system/resources/previews/009/384/332/original/old-vintage-book-clipart-design-illustration-free-png.png"
    },
    {
      title: "Book 4",
      description: "This is Book No. 4",
      image:"https://clipart-library.com/images/6Tpo6G8TE.jpg"
    },
    {
      title: "Book 5",
      description: "This is Book No. 5",
      image: "atomic-habits.jpg"
    }
  ];

  return (
    <>
      {/* <Post data={data} /> */}

      <Form />
    </>
  );
}

export default App;
