/*const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'inherit',
  },
};*/
import ChartMessages from '../components/ChartData/ChartMessages';
import StatusSyslog from '../components/StatusSyslog/StatusSyslog';
import ChartDoughnut from '../components/ChartData/ChartDoughnut';
const Dashboard = () => {
  return (
    <section className="section-dashboard px-15 w-full flex justify-center">
      <div className="section_container">
        <h2 className="dashboard mb-6">Dashboard</h2>
        <StatusSyslog />
        <ChartMessages />
        <ChartDoughnut />
      </div>
    </section>
  );
};
export default Dashboard;
