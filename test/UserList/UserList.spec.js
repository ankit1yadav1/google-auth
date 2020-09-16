import React from 'react'
import { shallow, mount } from 'enzyme'
import UserList from '../../src/components/UserList'

describe('UserList Component',() =>{

    it('Should render Login component', () => {
        const wrapper = shallow(<UserList />)
        expect(wrapper).toBeTruthy()
    })
})