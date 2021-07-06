import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Column, Link, Title, Text, Break } from './styles/footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />;
};

Footer.Row.propTypes = {
  children: PropTypes.any,
};

Footer.Column.propTypes = {
  children: PropTypes.any,
};

Footer.Text.propTypes = {
  children: PropTypes.any,
};

Footer.Link.propTypes = {
  children: PropTypes.any,
};

Footer.Title.propTypes = {
  children: PropTypes.any,
};

Footer.propTypes = {
  children: PropTypes.any,
};