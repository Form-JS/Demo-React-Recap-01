import TitlePage from '../../components/title-page/title-page';
import DellaDonald from './images/della-duck-donald-duck.gif';

const Home = () => {

    return (
        <main>
            <TitlePage content='Home' />
            <img
                src={DellaDonald}
                alt='Della Duck & Donald Duck'
                width={200}
            />
        </main>
    );
};

export default Home;