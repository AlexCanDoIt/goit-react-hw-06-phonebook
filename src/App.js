/* Modules */
import { Component } from 'react';

/* Components */
import Section from './components/Section';
import ContactEditor from './components/ContactEditor';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';
import Modal from './components/Modal';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';

/* Styles */

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Section title={'Contacts'}>
          <ContactFilter />
          <IconButton onClick={this.toggleModal} aria-label="Add contacts">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>
          <ContactList />
        </Section>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ContactEditor onSave={this.toggleModal} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
