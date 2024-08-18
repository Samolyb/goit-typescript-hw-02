import { Audio } from 'react-loader-spinner';
import css from "./Loader.module.css";

type LoaderProps = {
    loading: boolean;
};

export default function Loader({ loading }: LoaderProps) {
    return (
        <div className={css.loader}>
            {loading && <Audio height="100" width="100" color='ocean' ariaLabel='loading' />}
        </div>
    );
}