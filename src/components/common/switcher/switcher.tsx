import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { ThemeChanger } from '../../../redux/action';
import { Helmet } from 'react-helmet';
import { Button, ListGroup } from 'react-bootstrap';

const Switcher = ({local_varaiable}: any) => {
  const [activeIndex, setActiveIndex] = useState<number|null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const items = [
    {label: 'Categories', icon: ''},
    {label: 'Products', icon: ''},
    {label: 'Models', icon: ''},
    {label: 'Brands', icon: ''},
    {label: 'Activities', icon: 'bi-clipboard2-minus'},
    {label: 'Works', icon: 'bi-clipboard-data'},
    {label: 'Clients', icon: 'bi-person'},
    {label: 'Vehicles', icon: 'bi-car-front-fill'},
    {label: 'Users', icon: 'bi-person'},
    {label: 'Permissions', icon: 'bi-toggles2'},
    {label: 'Roles', icon: 'bi-ui-checks'},
];

  const Switcherclose = () => {
    if (document.querySelector('.offcanvas-end')?.classList.contains('show')) {
      document.querySelector('.offcanvas-end')?.classList.remove('show');
      document.querySelector('.switcher-backdrop')?.classList.remove('d-block');
      document.querySelector('.switcher-backdrop')?.classList.add('d-none');
    }

  };

  const customStyles: any = ` ${local_varaiable.colorPrimaryRgb != '' ? `--primary-rgb:${local_varaiable.colorPrimaryRgb}` : ''};
      ${local_varaiable.bodyBg1 != '' ? `--body-bg-rgb:${local_varaiable.bodyBg1}` : ''};
      ${local_varaiable.bodyBg2 != '' ? `--body-bg-rgb2:${local_varaiable.bodyBg2}` : ''};
      ${local_varaiable.darkBg != '' ? `--light-rgb:${local_varaiable.darkBg}` : ''};
      ${local_varaiable.darkBg != '' ? `--form-control-bg:rgb(${local_varaiable.darkBg})` : ''};
      ${local_varaiable.inputBorder != '' ? `--input-border:rgb(${local_varaiable.inputBorder})` : ''};`;

  return (
    <Fragment>
      <Helmet>
        <html dir={local_varaiable.dir}
              data-theme-mode={local_varaiable.dataThemeMode}
              data-header-styles={local_varaiable.dataHeaderStyles}
              data-vertical-style={local_varaiable.dataVerticalStyle}
              data-nav-layout={local_varaiable.dataNavLayout}
              data-menu-styles={local_varaiable.dataMenuStyles}
              data-toggled={local_varaiable.toggled}
              data-nav-style={local_varaiable.dataNavStyle}
              hor-style={local_varaiable.horStyle}
              data-page-style={local_varaiable.dataPageStyle}
              data-width={local_varaiable.dataWidth}
              data-menu-position={local_varaiable.dataMenuPosition}
              data-header-position={local_varaiable.dataHeaderPosition}
              data-icon-overlay={local_varaiable.iconOverlay}
              data-bg-img={local_varaiable.bgImg}
              data-icon-text={local_varaiable.iconText}
              data-loader={local_varaiable.loader}
              style={customStyles}
        >

        </html>
      </Helmet>
      <div className="switcher-backdrop d-none" onClick={() => {
        Switcherclose();
      }}>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Administration</h5>
          <Button variant=""
                  onClick={() => {
                    Switcherclose();
                  }}
                  type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
        </div>

        <div className="offcanvas-body">
          <ListGroup as="ul">
            {items.map((item, index) => (
              <ListGroup.Item
                as="li"
                className={`list-group-item ${activeIndex === index ? 'active' : ''}`}
                aria-current="true"
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="d-flex align-items-center">
                  <div>
              <span className="fs-15">
                <i className={`bi ${item.icon}`}></i>
              </span>
                  </div>
                  <div className="ms-2">
                    {item.label}
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

      </div>
    </Fragment>
  );
};
Switcher.defaultProps = {};

const mapStateToProps = (state: any) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, {ThemeChanger})(Switcher);
