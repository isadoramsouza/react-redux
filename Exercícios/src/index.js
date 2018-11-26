import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family'
import Member from './member'


ReactDOM.render(
   <Family lastName='Souza'>
        <Member name='Isadora'/>
        <Member name='Isinha'/>
    </Family>
, document.getElementById('app'))

