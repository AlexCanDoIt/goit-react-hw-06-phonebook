import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions'
import styles from './ContactFilter.module.css'

const ContactFilter = ({ value, onChange }) => (
  <label className={styles.text}>
    Find contacts by name
    <input className={styles.input} type="text" value={value} onChange={onChange} />
  </label>
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default  connect(mapStateToProps, mapDispatchToProps)(ContactFilter);