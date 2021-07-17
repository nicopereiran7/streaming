import DataBsaic from "./DataBasic";

const NewSeries = () => {
  const data = [
    {
      img: "https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/02/falcon-winter-soldier-scaled.jpeg",
    },
    {
      img: "https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/02/falcon-winter-soldier-scaled.jpeg",
    },
    {
      img: "https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/02/falcon-winter-soldier-scaled.jpeg",
    },
    {
      img: "https://i1.wp.com/hipertextual.com/wp-content/uploads/2021/02/falcon-winter-soldier-scaled.jpeg",
    },
  ];

  return <DataBsaic data={data} title="New Series" />;
};

export default NewSeries;
