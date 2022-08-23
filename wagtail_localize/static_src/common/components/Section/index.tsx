import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Title = styled.div`
    box-sizing: border-box;
    height: 40px;
    -webkit-font-smoothing: auto;
    background-color: var(--w-color-secondary-50);
    color: var(--w-color-secondary);
    text-transform: uppercase;
    padding: 0.9em 0 0.9em 95px;
    font-size: 0.95em;
    margin: 0;
    line-height: 1.5em;
    font-weight: 400;
    overflow: hidden;
    position: relative;

    > h3 {
        display: inline;
        text-transform: inherit;
        font-weight: inherit;
        float: none;
        color: inherit;
        font-size: inherit;
    }

    &::before {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-shadow: none;
        font-family: wagtail;
        text-transform: none;
        content: '';
        text-align: center;
        display: block;
        position: absolute;
        z-index: 2;
        font-size: 2em;
        top: 0;
        line-height: 1.8em;
        left: 0;
        color: #fff;
        padding: 0;
        margin: 0;
        background-color: var(--w-color-primary);

        width: 20px;
    
        @media screen and (min-width: 800px) {
          width: 80px;
        }
    }
`;

interface SectionProps {
  title: string;
}

const Section: FunctionComponent<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <Title>
        <h3>{title}</h3>
      </Title>
      {children}
    </section>
  );
};

export default Section;
