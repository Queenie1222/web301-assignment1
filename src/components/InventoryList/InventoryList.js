import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Import components
import styles from './InventoryList.module.css';

class InventoryList extends Component {

render() {
    const savedData = this.props.savedData;
    return (
        <div>
           <table className={styles.List}>
                <thead>
                    <tr className={styles.Header}>
                        <td>Name</td>
                        <td>Count</td>
                    </tr>
                </thead>
                <tbody>
                    {
                      savedData.map((savedData) => (
                        <tr key={savedData.key} className={styles.Data}>
                            <td>{savedData.name}</td>
                            <td>{savedData.number}</td>
                        </tr>
                        ))
                    }   
                </tbody>
                </table>
        </div>
    );
    }
}
export default InventoryList;