import React from 'react';
import { Container,Base, Error , Title, Text, TextSmall, Link, Input, Submit } from './styles/form';
import PropTypes from 'prop-types';

export default function Form({ children, ...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({children, ...restProps}){
    return <Error { ...restProps}>{ children }</Error>
}

Form.Base = function FormBase({children, ...restProps}){
    return <Base { ...restProps}>{ children }</Base>
}

Form.Title = function FormTitle({children, ...restProps}){
    return <Title { ...restProps}>{ children }</Title>
}

Form.Text = function FormText({children, ...restProps}){
    return <Text { ...restProps}>{ children }</Text>
}

Form.TextSmall = function FormTextSmall({children, ...restProps}){
    return <TextSmall{ ...restProps}>{ children }</TextSmall>
}

Form.Link = function FormLink({children, ...restProps}){
    return <Link { ...restProps}>{ children }</Link>
}

Form.Input = function FormInput({children, ...restProps}){
    return <Input { ...restProps}>{ children }</Input>
}

Form.Submit = function FormSubmit({children, ...restProps}){
    return <Submit { ...restProps}>{ children }</Submit>
}


Form.propTypes = {
    children: PropTypes.any,
};


Form.Base.propTypes = {
    children: PropTypes.any,
};

Form.Error.propTypes = {
    children: PropTypes.any,
};

Form.Title.propTypes = {
    children: PropTypes.any,
};

Form.Text.propTypes = {
    children: PropTypes.any,
};

Form.TextSmall.propTypes = {
    children: PropTypes.any,
};

Form.Input.propTypes = {
    children: PropTypes.any,
};

Form.Submit.propTypes = {
    children: PropTypes.any,
};

Form.Link.propTypes = {
    children: PropTypes.any,
};