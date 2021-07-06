import React from 'react';
import { Input, Button,Break,  Text, Container } from './styles/opt-form';
import PropTypes from 'prop-types';

export default function OptForm({ children, ...restProps}){
    return<Container {...restProps} >{children}</Container>;
}

OptForm.Input = function OptFormInput ({...restProps}){
    return <Input { ...restProps} />
};

OptForm.Button = function OptFormButton ({children,...restProps}){
    return (
        <Button { ...restProps} >
            {children}
            <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
};

OptForm.Text = function OptFormText ({children,...restProps}){
    return <Text { ...restProps} >{children }</Text>
}

OptForm.Break = function OptFormBreak ({...restProps}){
    return <Break {...restProps} />;
}

OptForm.propTypes = {
    children: PropTypes.any,
};

OptForm.Text.propTypes = {
    children: PropTypes.any,
};

OptForm.Input.propTypes = {
    children: PropTypes.any,
};

OptForm.Button.propTypes = {
    children: PropTypes.any,
};



