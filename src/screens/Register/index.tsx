import React, {useState} from "react";
import { Modal,
     TouchableWithoutFeedback,
      Keyboard, Alert
     } 
     from "react-native";

import * as Yup from 'yup';    
import {yupResolver} from '@hookform/resolvers/yup' 
import { useForm } from "react-hook-form";

import { Input } from "../../components/Forms/Input";
import { InputForm } from "../../components/Forms/InputForm";
import { CategorySelectButton } from "../../components/Forms/CategorySelectButton";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";


import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionsType,
    
}  from './styles';

interface FormData {
    name: string;
    amount: string;
}

const schema = Yup.object().shape({
    name: Yup
    .string()
    .required('Nome é obrigatório'),
    amount: Yup
    .number()
    .typeError('Informe um valor númerico')
    .positive('O valor não pode ser negativo')
});

export function Register(){
const [transactionsType, setTransactionsType] = useState('');
const [categoryModalOpen, setCategoryModalOpen] = useState(false);

const [category, setCategory] = useState({
    key: 'category',
    name:'Categoria'
});

const {
    control,
    handleSubmit,
    formState: { errors}
} = useForm({
        resolver: yupResolver(schema)
    });

function handleTransactionsTypeSelect (type: 'up' | 'down'){
    setTransactionsType(type);
}

function handleOpenSelectCategoryModal (){
    setCategoryModalOpen(true);
    console.log('Abrindo Modal', setCategoryModalOpen)
}

function handleCloseSelectCategoryModal (){
    setCategoryModalOpen(false);
    console.log('Fechando Modal', setCategoryModalOpen)
}

function handleRegister(form: FormData){

    if(!transactionsType)
        return Alert.alert('Selecione o tipo de Transação');
    if(category.key === 'category')
        return Alert.alert('Selecione a categoria');    


    const data = {
        name: form.name,
        amount: form.amount,
        transactionsType,
        category: category.key
    }
    console.log(data);
}
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            
           <Header>
               <Title>Cadastro</Title>
           </Header>

           <Form>
               <Fields>
                    <InputForm 
                        name="name"
                        control={control}
                        placeholder="Nome"
                        placeholderTextColor="#cecece"
                        autoCapitalize="sentences"
                        autoCorrect={false} 
                        error={errors.name && errors.name.message}
                    />
                    <InputForm 
                        name="amount"
                        control={control}
                        placeholder="Preço"
                        placeholderTextColor="#cecece"
                        keyboardType="numeric" 
                        error={errors.amount && errors.amount.message}                  
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

                    <CategorySelectButton 
                        title={category.name}
                        onPress={handleOpenSelectCategoryModal}
                    
                    />
                </Fields>
                <Button
                    title="Enviar"
                    onPress={handleSubmit(handleRegister)}
          />
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect
                category= {category}
                setCategory={setCategory}
                closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
            
        </Container>
        </TouchableWithoutFeedback>
    );
}

