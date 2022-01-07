import React, {useState} from 'react';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { Modal } from 'react-native';
import CategorySelect from '../CategorySelect';
import CategorySelectButton from '../../components/Form/CategorySelectButton';

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    Transactions
} from './styles';

import {Text, TouchableOpacity} from 'react-native';

export default function Register() {
    const [transactionSelected, setTrasactionSelected] = useState('');

    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
      })

    function handleTransactionSelected(type: 'up' | 'down'){
        setTrasactionSelected(type);
    }

    function handleOpenSelectCagategoryModal(){
        setCategoryModalOpen(true);
        console.log('open');
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false)
      }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                
                <Fields>
                    <Input placeholder='Nome'/>
                    <Input placeholder='Preço'/>
                    <Transactions>
                        <TransactionTypeButton 
                            title='Income'
                            type='up' 
                            isActive = {transactionSelected === "up"} 
                            onPress={()=>handleTransactionSelected('up')}
                        />

                        <TransactionTypeButton 
                            isActive = {transactionSelected === "down"} 
                            title='Outcome' 
                            type='down' 
                            onPress={()=>handleTransactionSelected('down')}
                        />
                    </Transactions>
                    
                    <CategorySelectButton title={category.name} onPress={() => handleOpenSelectCagategoryModal()}/>
                </Fields>

                <Button title="Enviar" />
            </Form>

            <Modal visible={categoryModalOpen}>

                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={() => handleCloseSelectCategoryModal()}
                />
            </Modal>
         
        </Container>
    )
}
