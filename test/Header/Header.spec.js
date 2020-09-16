import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../src/components/Header'

describe('Header Component',() =>{
    let props ={
        data: {
            email: '',
            imageUrl: '',
            name: ''
        },
        onLogout : undefined
    }
    it('Should render Header component', () =>{
        const wrapper = shallow(<Header {...props} />)
        expect(wrapper).toBeTruthy()
    }),
    it('Should render Header component with email', () =>{
        props.data.email = "email"
        const wrapper = shallow(<Header {...props} />)
        expect(wrapper.find('#email').text()).toEqual('email')
    }),
    it('Should render Header component with name', () =>{
        props.data.name = "name"
        const wrapper = shallow(<Header {...props} />)
        expect(wrapper.find('#name').text()).toEqual('name')
    }),
    it('Should render Header component without Logout fn', () =>{
        const wrapper = shallow(<Header {...props} />)
        expect(wrapper.find('#logout').length).toEqual(0)
    }),
    it('Should render Header component with Logout fn', () =>{
        props.onLogout = jest.fn()
        const wrapper = shallow(<Header {...props} />)
        expect(wrapper.find('#logout').length).toEqual(1)
    })
})