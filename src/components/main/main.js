import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Promo from "../promo/promo";
import Converter from "../converter/converter";

const Main = () => {
  return (
    <main>
      <Promo />
      <Converter />
    </main>
  );
};

Main.propTypes = {

};

const mapStateToProps = () => ({

});
export {Main};
export default connect(mapStateToProps, null)(Main);
