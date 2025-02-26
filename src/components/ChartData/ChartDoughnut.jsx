import ChartDoughnutLef from './CharDoughnutLeft';
import ChartDoughnutRight from './ChartDoughnutRigh';
const ChartDoughnut = () => {
  return (
    <div className="doughnut-container flex mt-10 w-full  shadow-inner">
      <ChartDoughnutLef />
      <ChartDoughnutRight />
    </div>
  );
};
export default ChartDoughnut;
