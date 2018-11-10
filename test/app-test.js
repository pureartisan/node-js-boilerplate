import React from 'react';
import Enzyme from 'enzyme';
import { expect, use as chaiUse } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import EnzymeReactAdapter from 'enzyme-adapter-react-16';

import {App} from "../src/app";

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new EnzymeReactAdapter() });
chaiUse(sinonChai);

describe('App', () => {

    let methodSpy;

    beforeEach(() => {
        methodSpy = spy(App.prototype, 'method2spy');
    });

    afterEach(() => {
        methodSpy.restore();
    });

    it('should not throw error when rendering', () => {
        expect(() => shallow(<App />)).to.not.throw();
    });

    it('should render the app', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div')).to.have.lengthOf(1);
    });

});
