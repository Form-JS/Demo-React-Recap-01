import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link, Outlet, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import TitlePage from './../../components/title-page/title-page';

export const RouteInitial = () => (
    <div>
        <Typography component='h3' variant='h6'>
            Contenu initial
        </Typography>
    </div>
);

export const RouteChoiceA = () => (
    <div>
        <Typography component='h3' variant='h6'>
            Choix A - Pierre
        </Typography>
    </div>
);

export const RouteChoiceB = () => (
    <div>
        <Typography component='h3' variant='h6'>
            Choix B - Morgane
        </Typography>
    </div>
);

export const RouteNotFound = () => (
    <div>
        <Typography component='h3' variant='h6'>
            Perdu :o
        </Typography>
    </div>
);

export const RouteParam = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Tips pour faire une redirection en cas d'erreur de parametre
    useEffect(() => {
        if (!/^[0-9]+$/.test(id)) {
            navigate('../error', { replace: true });
        }
    }, [id]);

    return (
        <div>
            <Typography component='h3' variant='h6'>
                Le parametre recu est {id}
            </Typography>
        </div>
    );
};

export const RouteQuery = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const firstname = searchParams.get('firstname');
    const lastname = searchParams.get('lastname');

    return (
        <div>
            <Typography component='h3' variant='h6'>
                Les parametres query sont : {firstname} {lastname}
            </Typography>
        </div>
    );
};

const DemoRouter = () => {

    return (
        <main>
            <TitlePage content='Demo de « React-Router »' />
            <ul>
                <li><Link to=''>Initial</Link></li>
                <li><Link to='choiceA'>Choix A</Link></li>
                <li><Link to='choiceB'>Choix B</Link></li>
                <li><Link to='/'>Retour à la page Home</Link></li>
            </ul>
            <ul>
                <li><Link to='param/42'>Param: 42</Link></li>
                <li><Link to='param/1337'>Param: 1337</Link></li>
                <li><Link to='param/test'>Param: Test</Link></li>
            </ul>
            <ul>
                <li><Link to='query/?firstname=Zaza&lastname=Vanderquack'>Query: firstname=Zaza &amp; lastname=Vanderquack</Link></li>
                <li><Link to='query/?firstname=Della&lastname=Duck'>Query: firstname=Della &amp; lastname=Duck</Link></li>
                <li><Link to='query/?firstname=Rachid'>Query: firstname=Rachid</Link></li>
            </ul>

            {/* ↓ Zone pour injecter le routing des elements enfants */}
            <Outlet />
        </main>
    );
};

export default DemoRouter;