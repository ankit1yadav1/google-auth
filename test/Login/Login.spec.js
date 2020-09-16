import React from 'react'
import { shallow, mount } from 'enzyme'
import Login from '../../src/components/Login'

describe('Login Component',() =>{

    // const setState = jest.fn();
    // const useStateMock = (initState) => [initState, setState];

    // afterEach(() => {
    //   jest.clearAllMocks();
    // });

    it('Should render Login component', () => {
        const wrapper = shallow(<Login />)
        expect(wrapper).toBeTruthy()
    })
    // it('Should render Login component', () => {
    //     jest.spyOn(React, 'useState').mockImplementation(useStateMock)
    //     setState(true)
    //     const wrapper = mount(<Login />)
    //     expect(wrapper.find('h1')).toEqual(true)
    // })
})