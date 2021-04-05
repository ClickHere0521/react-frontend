import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Media } from 'reactstrap';
import language from '../../constant/langConfig.json';
import i18next from '../../constant/i18n';
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext';
import { withApollo } from '../../../helpers/apollo/apollo';


const GET_CURRENCY = gql`
   query {
    getCurrency {
        currency
        name
        symbol
        value
    }
   }
`

const Currency = ({icon}) => {
    var { loading, data } = useQuery(GET_CURRENCY);
    const Context = useContext(CurrencyContext);
    const selectedCurrency = Context.currencyContext.selectedCurrency;

    const changeLanguage = lng => {
        i18next.changeLanguage(lng);
    };

    return (
        <li className="onhover-div mobile-setting">
            <div><Media src={icon} className="img-fluid" alt="" />
                <i className="fa fa-cog"></i>
            </div>
            <div className="show-div setting">
                <h6>language</h6>
                <ul>
                    {language.map((item, i) =>
                        <li key={i} ><a href={null} onClick={() => { changeLanguage(item.val) }}>{item.lang}</a></li>
                    )}
                </ul>
                <h6>currency</h6>
                <ul className="list-inline">
                    {data && data.getCurrency.map((cur, i) =>
                        <li key={i}><div onClick={() => selectedCurrency(cur)}>{cur.symbol}  {cur.currency}</div></li>
                    )}
                </ul>
            </div>
        </li>
    )
}

export default withApollo(Currency);