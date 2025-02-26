import FormLogin from '../components/FormLogin/FormLogin';

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
const HomePage = () => {
  return (
    <section className="section">
      <div>
        <h2>Home</h2>
        <FormLogin />
      </div>
    </section>
  );
};
export default HomePage;
