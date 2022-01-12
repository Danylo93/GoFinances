import React from "react";

import { HighLightCard } from "../../components/HighLightCard";
import { TransactionCard, TransactionCardProps} from "../../components/TransactionCard";

import { 
    Container,
    Header,
    Photo,
    User,
    UserGreeting,
    UserInfo,
    UserName,
    UserWrapper,
    Icon,
    HighLightCards,
    Title,
    Transactions,
    TransactionList

}  from './styles';

export interface DataListProps extends TransactionCardProps{
    id: string;
}

export function Dashboard(){

const data : DataListProps[] = [
    { 
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de Sistemas',
    amount: 'R$ 12.000,00',
    category: {
        name: 'Vendas',
        icon: 'dollar-sign'
    },
    date:'13/04/2022'
},
{ 
    id: '2',
    type: 'negative',
    title: 'Carroo Mercedez benz',
    amount: 'R$ 90.000,00',
    category: {
        name: 'Compra',
        icon: 'coffee'
    },
    date:'13/04/2022'
},
{ 
    id: '3',
    type: 'positive',
    title: 'Desenvolvimento de Sites',
    amount: 'R$ 12.000,00',
    category: {
        name: 'Vendas',
        icon: 'shopping-bag'
    },
    date:'13/04/2022'
}

];



    return(
        <Container>
            <Header>
                <UserWrapper>
                <UserInfo>
                    <Photo 
                    source={{uri: 'https://avatars.githubusercontent.com/u/39104255?v=4'}} />
                    <User>
                        <UserGreeting>Olá,</UserGreeting>
                        <UserName>Danylo</UserName>
                    </User>
                </UserInfo>
                <Icon  name="power"/>
                </UserWrapper>

                
            </Header>
            <HighLightCards>
                <HighLightCard 
                title="Entradas" 
                amount="R$ 17.000,00" 
                lastTransaction="Ultima entrada em 17 de janeiro"
                type='up'
                />
                <HighLightCard 
                title="Saída" 
                amount="R$ 1.000,00" 
                lastTransaction="Ultima saída em 17 de janeiro"
                type="down"
                />
                <HighLightCard 
                title="Total" 
                amount="R$ 16.000,00" 
                lastTransaction="Saldo em 17 de janeiro"
                type="total"
                />
            </HighLightCards>

            <Transactions>
                <Title> Listagem</Title>

                <TransactionList 
                data = {data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <TransactionCard data={item} />}
                />

                
            </Transactions>
        </Container>
    )
}

