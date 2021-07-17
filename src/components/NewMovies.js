import DataBsaic from "./DataBasic";

const NewMovies = () => {
  const data = [
    {img: "https://culturageek.com.ar/wp-content/uploads/2021/05/pratt.jpg"},
    {img: "https://culturageek.com.ar/wp-content/uploads/2021/05/pratt.jpg"},
    {img: "https://culturageek.com.ar/wp-content/uploads/2021/05/pratt.jpg"},
    {img: "https://culturageek.com.ar/wp-content/uploads/2021/05/pratt.jpg"}
  ]

  return (
    <DataBsaic data={data} title="New Movies" />
  );
}

export default NewMovies;