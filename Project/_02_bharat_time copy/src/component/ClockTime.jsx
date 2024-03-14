let ClockTime = () => {
  let time = new Date();
  return (
    <div>
      <h3>
        Current Time: {time.toLocaleDateString()} -- {time.toLocaleTimeString()}{" "}
      </h3>
    </div>
  );
};
export default ClockTime;
