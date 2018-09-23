import {expect, use as chaiUse} from 'chai';
import {spy} from 'sinon';
import sinonChai from 'sinon-chai';
import {App} from "../src/app";

chaiUse(sinonChai);

describe('App', () => {

    let methodSpy;

    beforeEach(() => {
        methodSpy = spy(App.prototype, 'method2spy');
    });

    afterEach(() => {
        methodSpy.restore();
    });

    it('should not throw error when initialising', () => {
        expect(() => new App()).to.not.throw();
    });

});