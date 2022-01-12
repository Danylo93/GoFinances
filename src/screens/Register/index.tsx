import React, {useState} from "react";

import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsType,
    
}  from './styles';


export function Register(){
const [transactionsType, setTransactionsType] = useState('');

function handleTransactionsTypeSelect (type: 'up' | 'down'){
    setTransactionsType(type);
}
    return(
        <Container>
           <Header>
               <Title>Register</Title>
           </Header>

           <Form>
               <Fields>
                    <Input
                    placeholder="Nome"
                    placeholderTextColor="#cecece"
                    />
                    <Input
                    placeholder="Preço"
                    placeholderTextColor="#cecece"
                    />
                    <TransactionsType>
                        <TransactionTypeButton 
                        type='up'
                        title="Income"
                        onPress={() => handleTransactionsTypeSelect('up')}
                        isActive={transactionsType === 'up'}
                        />
                        <TransactionTypeButton
                        type='down'
                        title="Outcome"
                        onPress={() => handleTransactionsTypeSelect('down')}
                        isActive={transactionsType === 'down'}
                        />
                    </TransactionsType>
                </Fields>
                <Button title="Enviar" />
            </Form>
        </Container>
    );
}

