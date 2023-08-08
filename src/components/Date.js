const Date = ({ date }) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return (
    <div className="mt-2" style={{ fontSize: "0.8rem" }}>
      {day}/{month}/{year}
    </div>
  );
};

export default Date;
