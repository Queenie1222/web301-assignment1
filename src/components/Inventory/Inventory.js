import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';
// Import components
import SubmitButton from '../SubmitButton/SubmitButton';
import Icon from '@material-ui/core/Icon';
import styles from './Inventory.module.css';
import TextField from '@material-ui/core/TextField';
import InventoryList from '../InventoryList/InventoryList';
import 'react-s-alert/dist/s-alert-default.css';


class Inventory extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            number: 0,
            savedData: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(e){
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const { name, number, savedData} =this.state;

        if (name ==='')
        {
            Alert.error('Name cannot be empty!',{
                position: 'bottom-right',
                timeout: 5000,
                html: false
            });
           
        }else 
        {
            savedData.push({name, number});
            
            Alert.success('Data saved successfully!', {
                position: 'bottom-right',
                timeout: 5000,
                html: false
              });
            
        }
        this.setState({ name: '', number: 0, savedData })
        console.log (this.state);
        
    }


    render() {
        const { number, name, savedData } = this.state;

        console.log('state', this.state)
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <container className={styles.Counter}>
                <div className ={styles.Top}>
                <button type="button" 
                        className={styles.Arrow} 
                        onClick={() => this.setState({ number: number + 1 })} >
                <Icon fontSize="large">arrow_drop_up</Icon>
                </button>
                <p>{number}</p>
                {this.state.number !== 0 ?
                    <button type="button" 
                    className={styles.Arrow}
                    onClick={() => this.setState({ number: number - 1 })}>
                        <Icon fontSize="large">arrow_drop_down</Icon>
                    </button>
                :null
                }
                </div>
                <br/>
                
                <div className={styles.Bottom}>
                    <div className ={styles.Text}>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        value={name}
                        onChange={this.handleNameChange}
                        margin={"normal"}
                        variant="outlined"
                     />
                    </div>
                    <div className ={styles.Botton}>
                    <SubmitButton />
                    </div>
                </div>
                </container>
                
            </form>
            {this.state.savedData.length > 0 ? 
                    <InventoryList savedData = {this.state.savedData}/>
                    :
                    <div><br/><br/>Data is not available</div>
            }
            <Alert stack={{limit: 3}} />
            </div>
        );
    }
}

Inventory.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default Inventory;
