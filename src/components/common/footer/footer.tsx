import  { FC , Fragment} from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    return(
  <Fragment>
        <footer className="footer mt-auto py-3 bg-white text-center">
            <div className="container">
                <span className="text-muted"> Copyright © {new Date().getFullYear()} <span id="year"></span> <a
                        href="#" className="text-dark fw-semibold">Ismalabs</a>.
                    All
                    rights
                    reserved
                </span>
            </div>
        </footer>
  </Fragment>
);
};

export default Footer;
